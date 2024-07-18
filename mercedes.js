const url = "http://localhost:3000/mercedes";

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".wrapper").classList.add("display");
    document.querySelector("nav").classList.add("later");
    document.querySelector(".body").classList.add("later");
    document.querySelector(".head").classList.add("show");
  }, 2000);
});

const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile.classList.toggle("is-active");
});

function bestSellers() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const cars = document.querySelector(".cars");
      cars.innerHTML = " ";

      data.forEach((mercedes) => {
        if (mercedes.id === "popular") {
          const div2 = document.createElement("div");
          div2.className = "div2";
          cars.appendChild(div2);

          const carImg = document.createElement("img");
          carImg.src = mercedes.poster;
          carImg.className = "carImg";

          const carName = document.createElement("h3");
          carName.innerHTML = mercedes.name;
          carName.className = "carName";

          const carPrice = document.createElement("p");
          carPrice.innerHTML = mercedes.price;
          carPrice.className = "carPrice";

          const carHorsepower = document.createElement("p");
          carHorsepower.innerHTML = mercedes.horsepower;
          carHorsepower.className = "horsepower";

          const carDescription = document.createElement("p");
          carDescription.innerHTML = mercedes.description;
          carDescription.className = "description";

          cars.appendChild(div2);

          div2.appendChild(carImg);
          div2.appendChild(carName);
          div2.appendChild(carPrice);
          div2.appendChild(carHorsepower);
          div2.appendChild(carDescription);
        }
      });
    })
    .catch((error) => console.error("error fetching data", error));
}

bestSellers();

// utility functions
function createElement(element) {
  return document.createElement(element);
}

function addText(element, text) {
  element.innerText = text;
}

//function to add login form

function login() {
  const logButton = document.querySelector(".logButton");
  logButton.addEventListener("click", logPage);
}

function logPage() {
  const mobile = document.querySelector(".mobile-nav");
  console.log(mobile);
  if (mobile) {
    mobile.innerHTML = " ";

    const form = createElement("form");
    form.className = "login";

    const heading = createElement("h3");
    addText(heading, "Login!");

    const username = createElement("input");
    username.type = "text";
    username.className = "loginButton";
    username.placeholder = "Username";

    const userIcon = createElement("i");
    userIcon.className = "fa fa-user";
    userIcon.setAttribute("aria-hidden", "true");

    const password = createElement("input");
    password.className = "password";
    password.type = "password";
    password.placeholder = "Enter password";

    const lock = createElement("i");
    lock.className = "fa fa-lock";
    lock.setAttribute("aria-hidden", "true");

    const submit = createElement("button");
    submit.className = "submitForm";
    submit.type = "submit";
    addText(submit, "Mercedes Me!");

    const close = createElement("button");
    close.className = "closeForm";
    close.type = "reset";
    addText(close, "reset");

    form.appendChild(heading);
    form.appendChild(username);
    form.appendChild(userIcon);
    form.appendChild(password);
    form.appendChild(lock);
    form.appendChild(submit);
    form.appendChild(close);

    mobile.appendChild(form);
  } else {
    console.error("mobile not found");
  }
}

login();

const submitButton = document.querySelector(".mobile-nav");
submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.querySelector(".password").value;

  if (password === "mercedes") {
    alert("You are Logged in!");
  } else if (password !== "mercedes") {
    alert("invalid input password is 'mercedes' ");
  }
});

function searchBar() {
  const searchButton = document.querySelector(".searchButton");
  searchButton.addEventListener("click", () => {
    searchContent();
    getCars();
  });
}

function searchContent() {
  const removeMobile = document.querySelector(".mobile-nav");
  removeMobile.innerHTML = " ";

  const filter = createElement("input");
  filter.className = "filterCars";
  filter.type = "search";
  filter.placeholder = "search cars here";

  removeMobile.appendChild(filter);
}

searchBar();

function getCars() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      filterBySearch(data);
    });
}
function filterBySearch(data) {
  const input = document.querySelector(".filterCars");

  input.addEventListener("input", (e) => {
    const filteredCars = data.filter((car) =>
      car.name?.includes(e.target.value.toLowerCase())
    );

    filteredCars.forEach((car) => renderCar(car));
  });
}

function renderCar(car) {
  const mobile = document.querySelector(".mobile-nav");
  const searchDiv = createElement("div");
  searchDiv.className = "searchDiv";
  mobile.appendChild(searchDiv);

  const carSearch = createElement("h3");
  carSearch.className = "carSearch";
  carSearch.innerHTML = car.name;
  searchDiv.appendChild(carSearch);

  carSearch.addEventListener("click", displayCars);
}

function displayCars() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const body = document.querySelector("body");
      body.innerHTML = " ";

      data.forEach((mercedes) => {
        const displayContainer = createElement("div")
        displayContainer.className = "displayContainer"
        document.body.appendChild(displayContainer)

        const displayDiv = createElement("div");
        displayDiv.className = "displayDiv";
        displayContainer.appendChild(displayDiv);

        const displayImage = createElement("img");
        displayImage.src = mercedes.poster;

        const displayName = createElement("h3");
        displayName.className = "displayName";
        displayName.innerHTML = mercedes.name;

        const displayPrice = createElement("p");
        displayPrice.className = "displayPrice";
        displayPrice.innerHTML = mercedes.price;

        const displayHorsepower = createElement("p");
        displayHorsepower.className = "displayHorsepower";
        displayHorsepower.innerHTML = mercedes.horsepower;

        const displayDescription = createElement("p");
        displayDescription.className = "displayHorsepower";
        displayDescription.innerHTML = mercedes.description;

        displayDiv.appendChild(displayImage);
        displayDiv.appendChild(displayName);
        displayDiv.appendChild(displayPrice);
        displayDiv.appendChild(displayHorsepower);
        displayDiv.appendChild(displayDescription);
      });
    });
}
