let hamOpen = document.querySelector(".ham-img")
let hamClose = document.querySelector(".close-img")
let mobileNav = document.querySelector(".navbar>ul")
let body = document.querySelector("body")
let container = document.querySelector(".container")
let upArrows = document.querySelectorAll(".arr-up")
let downArrows = document.querySelectorAll(".arr-dwn")
let dropdowns = document.querySelectorAll(".dropdown")

hamOpen.addEventListener("click", function(){
    hamOpen.classList.add("hide")
    hamClose.classList.remove("hide")
    mobileNav.classList.remove("move")
    body.classList.add("bg-active")
})
hamClose.addEventListener("click", function(){
    hamClose.classList.add("hide")
    hamOpen.classList.remove("hide")
    mobileNav.classList.add("move")
    body.classList.remove("bg-active")
})
downArrows.forEach(function(downArrow){
    downArrow.addEventListener("click", function(e){
       let closestDiv =  e.target.closest("li").children[2]
       let closestUpArrow = downArrow.nextElementSibling
       closestUpArrow.classList.remove("hide")
       closestDiv.classList.remove("hide")
       downArrow.classList.add("hide")
    })
})
upArrows.forEach(function(upArrow){
    upArrow.addEventListener("click", function(e){
       let closestDiv =  e.target.closest("li").children[2]
       let closestDownArrow = upArrow.previousElementSibling
       closestDownArrow.classList.remove("hide")
       upArrow.classList.add("hide")
       closestDiv.classList.add("hide")
    })
})




