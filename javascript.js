
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

/*prevButton.addEventListener('click', () => {
    let index = currentIndex - 1;
    index = index < 0 ? carouselItems.length - 1 : index;
    goToSlide(index);
  });
*/
nextButton.addEventListener ('click', () => {
    let index = currentIndex + 1;
    if (index >= carouselItems.length) {
      index = 0;
    }
    goToSlide (index);
});

/*nextButton.addEventListener('click', () => {
    let index = currentIndex + 1;
    index = index >= carouselItems.length ? 0 : index;
    goToSlide(index);
  });
*/
intervalId = setInterval (autoAdvance, 5000);
