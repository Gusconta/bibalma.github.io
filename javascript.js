
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

const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

const searchTerm = document.getElementById('searchInput').value;
  window.location.href = `paginas/catalogo/catalogo.html?search=${encodeURIComponent(searchTerm)}`;
});




/*       calendario        */

const monthElement = document.querySelector(".month");
const yearElement = document.querySelector(".year");
const currentDate = new Date();
const numDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
const monthName = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(currentDate);
const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
monthElement.textContent = capitalizedMonth;
const year = currentDate.getFullYear();
monthElement.textContent = monthName;
yearElement.textContent = year;
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
const datesContainer = document.querySelector(".dates");
for (let i = 1; i <= numDays; i++) {
  const dateElement = document.createElement("div");
  dateElement.classList.add("date");
  dateElement.textContent = i;
  datesContainer.appendChild(dateElement);
if (i === 1) {
  dateElement.style.gridColumnStart = firstDay + 1;
}
const eventDate = 25;
if (i === eventDate) {
  dateElement.classList.add("event");
  const eventTooltip = document.createElement("div");
  eventTooltip.classList.add("event-tooltip");
  eventTooltip.textContent = "Acto por el 25 de mayo";
  dateElement.appendChild(eventTooltip);
}
}
