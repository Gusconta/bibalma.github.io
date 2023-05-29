/*   navbar   */

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scroll', window.scrollY > 0);
  }
);

/*        search         */

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(event) {

  event.preventDefault();

const searchTerm = document.getElementById('searchInput').value;

  window.location.href = `catalogo.html?search=${encodeURIComponent(searchTerm)}`;
});


/*    catalogo    */



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('search');

const searchResults = document.getElementById('searchResults');

searchResults.textContent = `Resultados de búsqueda para: ${searchTerm}`;

const pdfViewer = document.getElementById('pdfViewer');

const pdfUrl = 'ruta_del_archivo.pdf';

const viewer = new PDFTron.WebViewer({
  path: 'webviewer.min.js',
  initialDoc: pdfUrl
}, pdfViewer);

/*     media queries   */

const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function() {
  this.classList.toggle('active');
});
