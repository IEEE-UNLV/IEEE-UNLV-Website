//Hambrurger Menu
const menu = document.querySelector('#hamburgerMenu');
const menuLinks = document.querySelector('.navLinks');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//About Page Image Slideshow
let current = 0;
const slides = document.querySelectorAll('.GalleryContent');
//console.log(slides);
function showSlide(index)
{
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide()
{
  //console.log("nextSlide()");
  //console.log(current);
  current = (current + 1) % slides.length;

  showSlide(current);
}

function prevSlide()
{
      current = (current - 1 + slides.length ) % slides.length;
      showSlide(current);
}

//console.log("Clicked");



