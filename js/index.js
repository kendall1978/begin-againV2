// Mobile Menu

const myNav = document.querySelector("#my-nav")
const burger = document.querySelector("#burger")
const navMenu = document.querySelector("#nav-links")

burger.addEventListener('click', ()=> {
    navMenu.classList.toggle("is-active")
    myNav.classList.toggle("is-active")
    burger.classList.toggle("is-active")
})

const fadeInSection = document.querySelector(".fade-in-section")

console.log(fadeInSection)

window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY
    console.log(scroll)
    if (scroll >= 750) {
        fadeInSection.classList.add("is-visible")
    }
    if (scroll < 250) {
        fadeInSection.classList.remove("is-visible")
    }
})

