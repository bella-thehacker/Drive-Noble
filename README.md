# Drive-Noble-dealers

## Website Summary 

**Drive-Noble** is car a dealership company located in Africa that supplies its clients with the worlds leading car brand **Mercedes**.

## User Experience
The user is able to view a wide range of cars including the company's best sellers. For all  Mercedes enthusiasts, they can search the cars of their choice by typing on the search bar.For those who wish to be sent company emails on the latest deals they can log in to the website to receive deals.


## Phase-1 project
## Project Requirements

- Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIsLinks to an external site.. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

- Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

- Use at least 3 distinct event listenersLinks to an external site. (3 events of different types) that enable interactivity. What this means is that, if you had 3 click events, that would only count as 1 distinct event and you would need to add at least 2 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.

- Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

- Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

## System Requirements

- Node 18+
- JSON Server
- A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
- Operating System (Windows 10+, MacOS, Linux, etc.)
- A text editor capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
- RAM >= 4GB
- Disk space >= 1GB

## Installation

To use this repo,follow these steps:


1.  Open the terminal/CLI on your computer.

2.  If you don't have JSON server installed in the terminal, install it globally using the following command:

        npm install -g json-server

3.  Clone the repository by running the following command:

        git clone https://github.com/oyieroyier/deploying_a_local_server.git

4.  Change directory to the repo folder:

        cd deploying_a_local_server

5.  Open it in your Code Editor of choice. If you use VS Code, run the command:

 ### Content of the Folders
- index.html
- mercedes.css
- mercedes.js
- db.json

#### index.html
This file contains the basic structure of the website including the logo, menu and social media icons.

#### mercedes.css
This file contains the styling done to the website which incooparates styling the js file and the html file.

#### db.json
It contains the data that is deployed to act like the backend for the websites.

#### mercedes.js
It contains the main work carried out by the website.It listens for events and fetches data from the json server.

#### Explanation of content in mercedes.js
The beginning of the file defines the url that is deployed in the json server and acts as a backend.It is where the website fetches its data from.
```js
const url = "http://localhost:3000/mercedes";
```
The next function ensures that the js file is read after the html file is fully loaded and delays the content on the screen excluding the mercedes logo.This is made possible with **setTimeout** which is built into javascript. This was inspired by the real Mercedes website which displays its logo first.

```js
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".wrapper").classList.add("display");
    document.querySelector("nav").classList.add("later");
    document.querySelector(".body").classList.add("later");
    document.querySelector(".head").classList.add("show");
  }, 2000);
});
```
- Following that, the hamburger menu is formed which changes the menu from a hamburger to an **x** when clicked the menu displays additional information relating to the company.

- The next function called **bestSellers**, adds the most popular cars in the json file to the DOM. This is made possible by using an if statement.Each car is then given its own div and is styled in css.
```js
 data.forEach((mercedes) => {
        if (mercedes.id === "popular") {
            const div2 = document.createElement("div")
            div2.className = "div2"
            cars.appendChild(div2)
```

- The next Functions are **Utility Function** They were made to stop repetition that was observed in the previous function.
```js
// utility functions
 function createElement(element){
    return document.createElement(element)
 }

 function addText(element,  text){
    (element.innerText = text)
 }
```

- the next function is the **the login function** which calls the **logPage function** this makes a form in the js file and appends it to the DOM where it is styled accordingly.
```js
function login() {
    const logButton = document.querySelector(".logButton")
    logButton.addEventListener("click", logPage)
 }
 ```
 - In the next part the submit button formed in the logPage function is given an event listener in which if the password*mercedes* is input in the form then it would give an alert that the user has logged in successfully and when it is not the correct password it alerts that the password is invalid.

 ```js
 const submitButton = document.querySelector(".mobile-nav")
 submitButton.addEventListener("submit" , (e) => {
    
    e.preventDefault()
    const password = document.querySelector(".password").value

    if(password === "mercedes"){
     alert("You are Logged in!")

    }else if (password !== "mercedes"){
        alert( "invalid input password is 'mercedes' ")
 }
 
})
```

- The rest of the functions work on the search button and the search input field. An event listener is added where if the submit button is clicked it would display the search input

```js
function searchBar(){
   const searchButton =  document.querySelector(".searchButton")
   searchButton.addEventListener("click", () =>{
      searchContent()
      getCars()
      
   })
}
   ```

- When letters are typed in the search input, it displays the cars whose name contains any of the typed letters. 
```js
function filterBySearch(data){
   
   const input = document.querySelector(".filterCars")
  
   input.addEventListener("input", (e) =>{
     
      const filteredCars = data.filter(car => (car.name?.includes(e.target.value.toLowerCase())))
   
      filteredCars.forEach(car => renderCar(car))
      
   })
}
```

-The last function ensures that the user can click on the list of items displayed on the screen and can view the car that has been clicked on an empty page.

## Credits
- credits to my Technical Mentors Bob and Titus who were present for consultations and questions.
- I also used https://www.youtube.com/ to find out how some functions are written

## Privacy and Copyright
>>>>>>> 5b46c03 (modified readme)
Copyright (c) [2024] [Ivy Nyambura]


