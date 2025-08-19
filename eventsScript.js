//Event pages tiles
let currentPage = 0;
const tiles = document.querySelectorAll('#pastEvents .pastEventContainer');
const tilesPerPage = 5;

function renderPage(page){
  currentPage = page;
  tiles.forEach((tile, index) => {
    if(index >= page * tilesPerPage && index < (page + 1) * tilesPerPage){
      tile.style.display = "block";
    } else{
      tile.style.display = "none";
    }
  });

  renderPagination();
}

function renderPagination(){
  const pagination = document.getElementById("eventPages");
  pagination.innerHTML = "";
  const pageCount = Math.ceil(tiles.length / tilesPerPage);

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.disabled = currentPage === 0;
  prevBtn.onclick = () => renderPage(currentPage - 1);
  pagination.appendChild(prevBtn);

  for(let i = 0; i < pageCount; i++){
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    if(i === currentPage) btn.classList.add("active");
    btn.onclick = () => renderPage(i);
    pagination.appendChild(btn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = currentPage === pageCount-1;
  nextBtn.onclick = () => renderPage(currentPage + 1);
  pagination.appendChild(nextBtn);

}

renderPage(0);