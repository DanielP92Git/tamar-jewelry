const images = document.querySelectorAll('.slider-image-item');
const sliderBtnRight = document.querySelector('.slider-btn--right');
const sliderBtnLeft = document.querySelector('.slider-btn--left');

// Modal window:
////////////////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnCloseThanks = document.querySelector('.close-thanks');
const submitSubscribe = document.querySelector('#submit-subscribe');
const thanksHide = document.querySelector('.hide');
// const subscribeEmail = document.querySelector('#subscribe-email');
// const subscribeLabel = document.querySelector('.subscribe-label');
// const subscribeImage = document.querySelector('#subscribe-image');

const openModal = async function () {
  try {
    const timeoutModal = function () {
      modal.style.display = 'none';
      setTimeout(() => {
        modal.classList.add('modal-reveal');
        modal.style.display = 'flex';
        overlay.classList.add('overlay-reveal');
      }, 3000);
    };
    await window.addEventListener('load', timeoutModal);
  } catch (err) {
    console.error(err);
  }
};

const closeModal = function () {
  modal.style.display = 'none';
  overlay.classList.remove('overlay-reveal');
};

const closeSubscribe = function () {
  modal.style.display = 'none';
  thanksHide.classList.remove('hide');
};

const closeThanks = function () {
  thanksHide.classList.add('hide');
  overlay.style.display = 'none';
};

// Modal window end
//````````````````````````````````````````````````````````

// Image Slider
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

// Image slider END
// ````````````````````````````````````````````````````````````

// Categories reveal
//////////////////////////////////////////////////

export const categoriesList = document.querySelector('.categories-list');
export const categoriesTab = document.querySelector('.categories-tab');

export const revealCategories = function () {
  categoriesList.classList.add('categories-list--active');
};

export const hideCategories = function () {
  categoriesList.classList.remove('categories-list--active');
};

// Categories reveal END
// `````````````````````````````````````````````````````

// Go to top:
//////////////////////////////////////////////////
const goToTop = document.querySelector('.go-to-top');
const header = document.querySelector('header');

export const movePageTop = function () {
  header.scrollIntoView({ behavior: 'smooth' });
  window.op;
};

// Go to top END
// ````````````````````````````````````````````````````````

const bodyCheck = document.body.id.includes('home');

export const checkId = function () {
  if (!bodyCheck) return;
  sliderBtnRight.addEventListener('click', nextImage);
  sliderBtnLeft.addEventListener('click', prevImage);
  categoriesTab.addEventListener('mouseover', revealCategories);
  categoriesTab.addEventListener('mouseleave', hideCategories);
  btnCloseModal.addEventListener('click', closeModal);
  btnCloseThanks.addEventListener('click', closeThanks);
  overlay.addEventListener('click', closeModal);
  submitSubscribe.addEventListener('click', closeSubscribe);
  goToTop.addEventListener('click', movePageTop);
  openModal();
};
