const url = "http://localhost:3000/mercedes"

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.querySelector(".wrapper").classList.add("display")
        document.querySelector("nav").classList.add("later")
        document.querySelector(".body").classList.add("later")
        document.querySelector(".head").classList.add("show")
    }, 3000)
        
    
})

function mostPopular(){
    fetch(url)
    .then(res => res.json())
    .then((data) =>{
        const cars = document.querySelector(".cars")

        cars.innerHTML = `
        <img src="${mercedes.poster}" alt="${mercedes.name}"/>
        <h3>Mercedes-Benz${mercedes.name}</h3>
        <p> Price ${mercedes.price}</p>
        <p> Horsepower${mercedes.horsepower}`
        
        

       
    })
}


