//Hambrurger Menu
const menu = document.querySelector('#hamburgerMenu');
const menuLinks = document.querySelector('.navLinks');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//Event Page Setup
const tiles = Array.from(document.querySelectorAll('.pastEventContainer'));
const eventPages = document.getElementById('eventPages');

const pageSize = 5;
let currentPage = 1;
const totalPages = Math.ceil(tiles.length / pageSize);

function renderPage(page){
    currentPage = page;

    tiles.forEach((tile, i) => {
        const start = (page - 1) * pageSize;
        const end = page * pageSize;
        tile.style.display = (i >= start && i <end) ? 'block' : 'none';
    });

    eventPages.innerHTML = '';
    
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Prev';
    prevBtn.disabled = page === 1;
    prevBtn.onclick = () => renderPage(page - 1);
    eventPages.appendChild(prevBtn);

    for(let p = 1; p <= totalPages; p++)
    {
        const btn = document.createElement('button');
        btn.textContent = p;
        if(p === page) btn.classList.add('active');
        btn.onclick = () => renderPage(p);
        eventPages.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.disabled = page === totalPages;
    nextBtn.onclick = () => renderPage(page + 1);
    eventPages.appendChild(nextBtn);
}

renderPage(1);

let slideIndex = 0;
const slides = document.querySelectorAll('.GalleryContent');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
});

// Show first slide
showSlide(slideIndex);
