
/*   navbar   */

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scroll', window.scrollY > 0);
  }
);

/*   carousel   */ 

const carouselTrack = document.querySelector ('.carousel-track');
const carouselItems = document.querySelectorAll ('.carousel-item');
const prevButton = document.querySelector ('.carousel-prev');
const nextButton = document.querySelector ('.carousel-next');
let currentIndex = 0;
let isTransitioning = false;
let intervalId;

function goToSlide (index) {
  if (isTransitioning) return;
  isTransitioning = true;
  const distance = carouselItems[index].offsetLeft - carouselTrack.offsetLeft;
  carouselTrack.style.transform = `translateX(-${distance}px)`;
  currentIndex = index;
  clearInterval (intervalId);
  intervalId = setInterval (autoAdvance, 5000);
  setTimeout (() => {
    isTransitioning = false; 
  } , 500);
}


function autoAdvance () {
  let index = currentIndex + 1;
  if (index >= carouselItems.length) {
    index = 0;
  }
  goToSlide (index);
}

prevButton.addEventListener ('click', () => {
  let index = currentIndex - 1;
  if (index < 0) {
  index = carouselItems.length - 1;
  }
  goToSlide (index);
});

nextButton.addEventListener ('click', () => {
    let index = currentIndex + 1;
    if (index >= carouselItems.length) {
      index = 0;
    }
    goToSlide (index);
});

intervalId = setInterval (autoAdvance, 5000);

/*        search         */

// Obtener referencia al formulario de búsqueda
const searchForm = document.getElementById('searchForm');

// Manejar el evento de envío del formulario
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener el valor ingresado en el campo de búsqueda
  const searchTerm = document.getElementById('searchInput').value;

  // Redirigir a la página de resultados de búsqueda con el término de búsqueda como parámetro
  window.location.href = `paginas/catalogo/catalogo.html?search=${encodeURIComponent(searchTerm)}`;
});




/*       calendario        */

// Obtener la referencia a los elementos con las clases "month" y "year"
const monthElement = document.querySelector(".month");
const yearElement = document.querySelector(".year");

// Obtener la fecha actual
const currentDate = new Date();

// Obtener el número de días en el mes actual
const numDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

// Obtener el nombre del mes actual
const monthName = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(currentDate);

// Capitalizar la primera letra del nombre del mes
const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

// Establecer el nombre del mes en los elementos correspondientes
monthElement.textContent = capitalizedMonth;

// Obtener el año actual
const year = currentDate.getFullYear();

// Establecer el nombre del mes y el año en los elementos correspondientes
monthElement.textContent = monthName;
yearElement.textContent = year;

// Obtener el primer día de la semana del mes actual
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

// Obtener la referencia al elemento con la clase "dates"
const datesContainer = document.querySelector(".dates");

// Generar los números de los días y agregarlos al contenedor
for (let i = 1; i <= numDays; i++) {
  const dateElement = document.createElement("div");
  dateElement.classList.add("date");
  dateElement.textContent = i;
  datesContainer.appendChild(dateElement);
  
// Si el día actual es el primer día del mes, aplicar el margen izquierdo correspondiente
if (i === 1) {
  dateElement.style.gridColumnStart = firstDay + 1;
}
const eventDate = 25; // Día con evento (ejemplo)
if (i === eventDate) {
  dateElement.classList.add("event");
  const eventTooltip = document.createElement("div");
  eventTooltip.classList.add("event-tooltip");
  eventTooltip.textContent = "Acto por el 25 de mayo";
  dateElement.appendChild(eventTooltip);
}
}
