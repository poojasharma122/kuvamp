const humburgerMenu = document.querySelector(".header_humburger");
const Navbar = document.querySelector(".header_navbar");
const CloseMenu = document.querySelector(".close-menu");

humburgerMenu.addEventListener("click", function () {
    Navbar.classList.add("active")
})
CloseMenu.addEventListener("click", function () {
    Navbar.classList.remove("active")
})


// scrollbar header section
window.addEventListener("scroll", function () {
    const scrollHeader = document.querySelector(".header");

    if (window.scrollY > 50) {
        scrollHeader.classList.add("scrolled");
    } else {
        scrollHeader.classList.remove("scrolled");
    }
});

