document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#hamburgerMenu');
  const menuLinks = document.querySelector('.navLinks');

  if (menu && menuLinks) {
    menu.addEventListener('click', () => {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    });
  }

  const slides = document.querySelectorAll('.GalleryContent');
  const previousButton = document.querySelector('.galleryPrevious');
  const nextButton = document.querySelector('.galleryNext');
  const status = document.querySelector('.galleryStatus');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === index);
    });

    if (status) {
      status.textContent = `${index + 1} of ${slides.length}`;
    }
  }

  if (slides.length > 0) {
    previousButton.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    nextButton.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    showSlide(current);
  }
});



