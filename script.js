const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle Menu on Click
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
};

// Hide Menu on Scroll
window.onscroll = () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
};
