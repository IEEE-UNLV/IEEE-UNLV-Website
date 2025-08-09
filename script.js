const menu = document.querySelector('#hamburgerMenu');
const menuLinks = document.querySelector('.navLinks');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});