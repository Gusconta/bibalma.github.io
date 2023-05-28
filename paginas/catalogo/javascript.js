/*   navbar   */

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scroll', window.scrollY > 0);
  }
);

/*        search         */

// Obtener referencia al formulario de búsqueda
const searchForm = document.getElementById('searchForm');

// Manejar el evento de envío del formulario
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener el valor ingresado en el campo de búsqueda
  const searchTerm = document.getElementById('searchInput').value;

  // Redirigir a la página de resultados de búsqueda con el término de búsqueda como parámetro
  window.location.href = `catalogo.html?search=${encodeURIComponent(searchTerm)}`;
});


/*    catalogo    */


// Obtener el término de búsqueda de la URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('search');

// Obtener referencia al elemento de resultados de búsqueda
const searchResults = document.getElementById('searchResults');

// Mostrar el término de búsqueda en los resultados
searchResults.textContent = `Resultados de búsqueda para: ${searchTerm}`;

// Obtener referencia al elemento del visor de PDF
const pdfViewer = document.getElementById('pdfViewer');

// URL del archivo PDF
const pdfUrl = 'ruta_del_archivo.pdf';

// Crear el visor de PDF
const viewer = new PDFTron.WebViewer({
  path: 'webviewer.min.js',
  initialDoc: pdfUrl
}, pdfViewer);



