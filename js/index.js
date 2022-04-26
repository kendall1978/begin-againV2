// Mobile Menu

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-menu');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})