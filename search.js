const config = {
  debounceTime: 300,
  minSearchLength: 2,
};

let searchInput, resultsCount, vehiclesGrid;

let allData = [];

function initSearch() {
  searchInput = document.getElementById("quickSearch");
  resultsCount = document.getElementById("resultsCount");
  vehiclesGrid = document.getElementById("vehiclesGrid");

  if (!searchInput || !resultsCount || !vehiclesGrid) {
    console.error("Required search elements not found in DOM");
    return;
  }

  loadData()
    .then((data) => {
      allData = data.mercedes;
      setupSearchListeners();
    })
    .catch((error) => {
      console.error("Failed to load data:", error);
      resultsCount.textContent = "Failed to load vehicle data.";
    });
}

async function loadData() {
  const response = await fetch("data.json");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

function setupSearchListeners() {
  let debounceTimer;

  searchInput.addEventListener("input", function (e) {
    clearTimeout(debounceTimer);
    const searchTerm = e.target.value.trim();

    if (searchTerm.length >= config.minSearchLength) {
      debounceTimer = setTimeout(() => {
        performSearch(searchTerm);
      }, config.debounceTime);
    } else {
      clearResults();
    }
  });
}

function performSearch(term) {
  term = term.toLowerCase();
  const results = allData.filter(
    (vehicle) =>
      vehicle.name.toLowerCase().includes(term) ||
      vehicle.price.toLowerCase().includes(term) ||
      vehicle.horsepower.toLowerCase().includes(term) ||
      vehicle.description.toLowerCase().includes(term)
  );

  displayResults(results);
}

function displayResults(results) {
  vehiclesGrid.innerHTML = ""; // Clear previous results
  resultsCount.textContent = `${results.length} vehicle(s) found`;

  if (results.length === 0) {
    vehiclesGrid.innerHTML = "<p>No vehicles found matching your search.</p>";
    return;
  }

  results.forEach((vehicle) => {
    const vehicleCard = document.createElement("div");
    vehicleCard.className = "vehicle-card";
    vehicleCard.innerHTML = `
      <img src="${vehicle.poster}" alt="${vehicle.name}">
      <h3>${vehicle.name}</h3>
      <p>Price: ${vehicle.price}</p>
      <p>Horsepower: ${vehicle.horsepower}</p>
      <p>${vehicle.description}</p>
    `;
    vehiclesGrid.appendChild(vehicleCard);
  });
}

function clearResults() {
  vehiclesGrid.innerHTML = "";
  resultsCount.textContent = "Loading vehicles...";
}

window.onload = initSearch;
