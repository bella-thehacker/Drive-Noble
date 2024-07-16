

const url = "http://localhost:3000/mercedes";

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".wrapper").classList.add("display");
    document.querySelector("nav").classList.add("later");
    document.querySelector(".body").classList.add("later");
    document.querySelector(".head").classList.add("show");
  }, 3000);
});

// function fetchData() {
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("error");
//       }
//       return res.json();
//     })
//     .then(mostPopular)
//     .catch((error) => {
//       console.error("error fetching data", error);
//     });
// }

// function createAnElement(element) {
//   return document.createElement(element);
// }

// function addText(element, text) {
//   element.innerText = text;
// }

// function listen(element, event, callback) {
//   return element.addEventListener(event, callback);
// }

// const mostPopular = (mercedes.data) => {
//   const cars = document.querySelector(".cars");
//   cars.innerHTML = ""
//   const popular = createAnElement("div");
//   popular.className = "popular";
//   cars.appendChild(popular);
  


//   mercedes.data.map((mercedes) => {
//     const carImg = createAnElement("img");
//     carImg.className = "carImg";
//     poster.src = mercedes.poster;
//     popular.appendChild(carImg);
  
//   });

  
// }

