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

 //function to add login form

 function login() {
    const logButton = document.querySelector(".logButton")
    logButton.addEventListener("click", logPage)
 }

 function logPage(){
    const mobile  = document.querySelector(".mobile-nav")
    console.log(mobile)
    if(mobile){
    mobile.innerHTML =" "

    const form = createElement("form")
    form.className = "login"

    const heading = createElement("h3")
    addText(heading, "Login!")

    const username = createElement("input")
    username.type = "text"
    username.className = "loginButton"
    username.placeholder = "Username"

    const userIcon = createElement("i")
    userIcon.className = "fa fa-user"
    userIcon.setAttribute("aria-hidden", "true")

    const password = createElement("input")
    password.className = "password"
    password.type = "password"
    password.placeholder = "Enter password"

    const lock = createElement("i")
    lock.className = "fa fa-lock"
    lock.setAttribute("aria-hidden", "true")

    const submit = createElement("button")
    submit.className = "submitForm"
    submit.type = "submit"
    addText(submit, "Mercedes Me!")

    const close = createElement("button")
    close.className = "closeForm"
    close.type = "reset"
    addText(close, "close")

    form.appendChild(heading)
    form.appendChild(username)
    form.appendChild(userIcon)
    form.appendChild(password)
    form.appendChild(lock)
    form.appendChild(submit)
    form.appendChild(close)

    mobile.appendChild(form)
 }else{
    console.error("mobile not found")
 }
}

 login()

 
 




 const submitButton = document.querySelector(".mobile-nav")
 submitButton.addEventListener("submit" , (e) => {
    
    e.preventDefault()
    const password = document.querySelector(".password").value

    if(password === "mercedes"){
    loggedIn()
    }else if (password !== "mercedes"){
        alert( "invalid input password is 'mercedes' ")
 }else{
    alert ( "please input password: 'mercedes' ")
 }
 
})

 function loggedIn(){
    

    const loadingScreen = createElement("img")
    loadingScreen.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczQydm5iZ3JmenlkYTV1ZWV1bHJnZWcwazVqNXBwM293amMyN2gwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MoIYVtBcvGlYye8O9D/giphy.webp"
    loadingScreen.className = "loadingScreen"
    document.body.appendChild(loadingScreen)

    setTimeout(() => {
        document.body.removeChild(loadingScreen)
        alert('You are now logged in!')
    }, 3000)
 }

 


 
//    document.querySelector(".closeForm").addEventListener("reset", (e) => {
//     const mobile = document.querySelector(".mobile-nav")
//     mobile.innerHTML = ''

//    })


