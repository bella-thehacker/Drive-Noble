const url = "http://localhost:3000/mercedes";

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".wrapper").classList.add("display");
    document.querySelector("nav").classList.add("later");
    document.querySelector(".body").classList.add("later");
    document.querySelector(".head").classList.add("show");
  }, 3000);
});

const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile-nav")

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle("is-active");
  mobile.classList.toggle("is-active")

});

function bestSellers() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const cars = document.querySelector(".cars");
      cars.innerHTML = " ";

      console.log(data);
      data.forEach((mercedes) => {
        if (mercedes.id === "3") {
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

          cars.appendChild(carImg);
          cars.appendChild(carName);
          cars.appendChild(carPrice);
          cars.appendChild(carHorsepower);
          cars.appendChild(carDescription);
        }
        console.log;
      });
    })
    .catch((error) => console.error("error fetching data", error));
}

bestSellers();

// utility functions
 function createElement(element){
    return document.createElement(element)
 }

 function addText(element,  text){
    (element.innerText = text)
 }
 

 // function for the search bar

 function searchBar(){
   const searchButton = document.querySelector("searchButton")
    searchButton.addEventListener("click" , searchBarContent)
 }

 function searchBarContent(){
    const mobile = document.querySelector("mobile-nav")
    mobile.innerHTML = ''
   const searchInput = createElement("input")
   searchInput.className = "searchInput"


   mobile.appendChild(searchInput)
   

 }

 searchBar()