// Sellectors
const images = document.querySelectorAll('.slider-image-item');
const sliderBtnRight = document.querySelector('.slider-btn--right');
const sliderBtnLeft = document.querySelector('.slider-btn--left');

let curSlide = 0;
const maxSlide = images.length;

const goToImage = function (slide) {
  images.forEach(img => (img.style.transform = `translateX(${-100 * slide}%)`));
};

const nextImage = function () {
  if (curSlide === maxSlide - 4) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToImage(curSlide);
};

const prevImage = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 4;
  } else {
    curSlide--;
  }
  goToImage(curSlide);
};

const bodyCheck = document.body.id.includes('home');

export const checkId = function () {
  if (!bodyCheck) return;
  sliderBtnRight.addEventListener('click', nextImage);
  sliderBtnLeft.addEventListener('click', prevImage);
};

// sliderBtnRight.addEventListener('click', nextImage)
//     sliderBtnLeft.addEventListener('click', prevImage)
// Event listeners
