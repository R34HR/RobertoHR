document.addEventListener("DOMContentLoaded", function () {
const navbarCollapse = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse, { toggle: true });
    }
    });
});
});
