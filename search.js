/**
 * Search Implementation for search.html
 * Works with data.json to provide search functionality
 * Features:
 * - Debounced search input
 * - Responsive results display
 */

// Configuration
const config = {
  debounceTime: 300, // ms
  minSearchLength: 2
};

// DOM Elements
let searchInput, resultsCount, vehiclesGrid;

// Data variables
let allData = [];

// Initialize the search functionality
function initSearch() {
  // Get DOM elements
  searchInput = document.getElementById('quickSearch');
  resultsCount = document.getElementById('resultsCount');
  vehiclesGrid = document.getElementById('vehiclesGrid');

  // Check if required elements exist
  if (!searchInput || !resultsCount || !vehiclesGrid) {
    console.error('Required search elements not found in DOM');
    return;
  }

  // Load data
  loadData()
    .then(data => {
      allData = data.mercedes; // Access the array of vehicles
      setupSearchListeners();
    })
    .catch(error => {
      console.error('Failed to load data:', error);
      resultsCount.textContent = 'Failed to load vehicle data.';
    });
}

// Load data from data.json
async function loadData() {
  const response = await fetch('data.json');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

// Setup event listeners for search
function setupSearchListeners() {
  let debounceTimer;

  // Input event with debounce
  searchInput.addEventListener('input', function(e) {
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

// Perform the search
function performSearch(term) {
  term = term.toLowerCase();
  const results = allData.filter(vehicle => 
    vehicle.name.toLowerCase().includes(term) ||
    vehicle.price.toLowerCase().includes(term) ||
    vehicle.horsepower.toLowerCase().includes(term) ||
    vehicle.description.toLowerCase().includes(term)
  );

  displayResults(results);
}

// Display search results
function displayResults(results) {
  vehiclesGrid.innerHTML = ''; // Clear previous results
  resultsCount.textContent = `${results.length} vehicle(s) found`;

  if (results.length === 0) {
    vehiclesGrid.innerHTML = '<p>No vehicles found matching your search.</p>';
    return;
  }

  results.forEach(vehicle => {
    const vehicleCard = document.createElement('div');
    vehicleCard.className = 'vehicle-card';
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

// Clear results
function clearResults() {
  vehiclesGrid.innerHTML = '';
  resultsCount.textContent = 'Loading vehicles...';
}

// Initialize search on page load
window.onload = initSearch;
