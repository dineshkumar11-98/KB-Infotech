const mobNav = document.querySelector(".mob_nav_bar");
const mobNavClose = document.querySelector(".nav_icon.closeBtn");
const nav = document.querySelector(".navigation");

mobNav.addEventListener("click", function() {
    nav.classList.add("active");
})

mobNavClose.addEventListener("click", function() {
    nav.classList.remove("active");
})