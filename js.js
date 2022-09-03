const navbar = document.querySelector ('#mobile-menu');
const navbarLinks = document.querySelector ('.navbar-menu');

// Display Mobile Menu //

const mobileNav = () => {
    navbar.classList.toggle('is-active');
    navbarLinks.classList.toggle('active');
};

navbar.addEventListener('click', mobileNav);