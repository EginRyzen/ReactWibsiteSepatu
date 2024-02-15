
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav .nav-menu");

menuToggle.addEventListener("Click", function () {
    // Toggle the 'slide' class on the nav element
    nav.classList.toggle("slide");
});