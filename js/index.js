// Mobile Menu

const myNav = document.querySelector("#my-nav")
const burger = document.querySelector("#burger")
const navMenu = document.querySelector("#navMenu")

burger.addEventListener('click', ()=> {
    navMenu.classList.toggle("is-active")
    myNav.classList.toggle("is-active")
    burger.classList.toggle("is-active")
})