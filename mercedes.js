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

// utility functions
function createElement(element){
    return document.createElement(element)
 }

 function addText(element,  text){
    (element.innerText = text)
 }

function bestSellers() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const cars = document.querySelector(".cars");
      cars.innerHTML = " ";
    
      

      console.log(data);
      data.forEach((mercedes) => {
        if (mercedes.id === "3") {
            const div2 = document.createElement("div")
            div2.className = "div2"
            cars.appendChild(div2)
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

          cars.appendChild(div2)

          div2.appendChild(carImg);
          div2.appendChild(carName);
          div2.appendChild(carPrice);
          div2.appendChild(carHorsepower);
          div2.appendChild(carDescription);
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

//  //pop ups for best selling cars
//  const popup = document.querySelector("div2")
//  popup.addEventListener("click", pop)

//  function pop(){

//  }

 // function for the search bar

 function searchBar(){
   const searchButton = document.querySelector(".searchButton")
    searchButton.addEventListener("click" , searchBarContent)
 }

 function searchBarContent(){
    const mobile = document.querySelector(".mobile-nav")
    mobile.innerHTML = ''

    const searchInput = createElement("input")
    searchInput.className = "searchInput"
    searchInput.placeholder = "Search"

    mobile.appendChild(searchInput)
 }

 searchBar()

 function searchCars(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const searchInput = document.querySelector(".searchInput")
        searchInput.addEventListener("submit", (e) =>{
            e.preventDefault()
            const value = e.target.searchInput.value
            console.log(value)
        })
        

    })
}

searchCars()

//  function login(){
//     const logButton = document.querySelector(".logButton")
//     logButton.addEventListener("click", logPage)
//  }

//  function logPage(){
//     const mobile = document.querySelector('.mobile-nav')
//     mobile.innerHTML = " "
    
//    const loginTemplate = createElement("form")
//    loginTemplate.innerHTML`
//    <h2> Log In</h2>
//    <input> "placeholder= Username" </input>
//    <input> "placeholder= password" </input>
//    <button> Login </button>
//    `
//    mobile.appendChild(loginTemplate)
//  }

//  login()