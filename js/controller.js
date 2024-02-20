import './core-js/actual';
import 'regenerator-runtime/runtime';
import * as categoriesFns from './categories.js';
import * as homeFn from './homePage.js';


// Modal windows:
//////////////////////////////////////////////////
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnCloseThanks = document.querySelector('.close-thanks');
// const subscribeImage = document.querySelector('#subscribe-image');
// const submitSubscribe = document.querySelector('#submit-subscribe');
// const subscribeEmail = document.querySelector('#subscribe-email');
// const subscribeLabel = document.querySelector('.subscribe-label');
// const thanksHide = document.querySelector('.hide');

// const closeModal = function () {
//   modal.style.display = 'none';
//   overlay.style.display = 'none';
// };

// const closeSubscribe = function () {
//   modal.style.display = 'none';
//   thanksHide.classList.remove('hide');
// };

// const closeThanks = function () {
//   thanksHide.classList.add('hide');
//   overlay.style.display = 'none';
// };

// btnCloseModal.addEventListener('click', closeModal);
// btnCloseThanks.addEventListener('click', closeThanks);
// overlay.addEventListener('click', closeModal);
// submitSubscribe.addEventListener('click', closeSubscribe);
// Modal windows end
//////////////////////////////////////////////////

//----------------------------------------------------

homeFn.checkId();

const menuBars = document.querySelector('.menubars-svg');
const menuBarsSVG = document.querySelector('.menubars-toggle');


const changeSVG = function () {
  const parent = document.querySelector('.menubars-toggle');
  parent.classList.toggle('close')
  const check = parent.classList.contains('close');
  let icon = '-svg';
  icon = (!check ? 'close': 'menubars') + icon;
  document.querySelector("use").setAttribute('href', `#${icon}`);

};
menuBars.addEventListener('click', changeSVG)
// const getRect = parent.getClientRects()
// getRect.addEventListener('scroll', changeSVG);

// const generateMarkup = function () {
//   const parent = document.querySelector('.menubars-toggle');

//   const markup =
//   `<use xlink:href="#shoppingcart-svg"></use>`;
  
//   parent.remove(markup);

// };


//////////////////////////////////////////////////
// Categories reveal

const categoriesList = document.querySelector('.categories-list');
const categoriesTab = document.querySelector('.categories-tab');

export const revealCategories = function () {
  categoriesList.classList.add('categories-list--active');
};

export const hideCategories = function () {
  categoriesList.classList.remove('categories-list--active');
};

categoriesTab.addEventListener('mouseover', revealCategories);
categoriesTab.addEventListener('mouseleave', hideCategories);

// End categories reveal
//////////////////////////////////////////////////

// Go to top:
//////////////////////////////////////////////////
const goToTop = document.querySelector('.go-to-top');
const header = document.querySelector('header');

goToTop.addEventListener('click', function () {
  header.scrollIntoView({ behavior: 'smooth' });
});

// Go to top end
//////////////////////////////////////////////////

// Sticky navigation
//////////////////////////////////////////////////
// const menuHeight = menu.getBoundingClientRect().height;
const menu = document.querySelector('.menu');

const stickyMenu = function (entries) {
  const [entry] = entries;
  
  if (!entry.isIntersecting)
  menu.classList.add('sticky') + menu.classList.remove('hidden');
else menu.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyMenu, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

//Sticky navigation end
//////////////////////////////////////////////////

// Reveal sticky menu
//////////////////////////////////////////////////
const hideMenu = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) menu.classList.add('hidden');
};

const headerObserverTwo = new IntersectionObserver(hideMenu, {
  root: null,
  threshold: 0.2,
});

headerObserverTwo.observe(header);
// Reveal end
//////////////////////////////////////////////////


// const imgs = document.querySelectorAll('.large-img-item');
// const imgReveal = function(entries, images) {
  
//   const [entry] = entries;
//   const [img] = images;
//   if (entry.isIntersecting) {
//     console.log(entries, entros);
//     img.classList.add('reveal')
//   }
// }
// imgReveal(imgs)
// const imgObserver = new IntersectionObserver(imgReveal, {
//   root: null,
//   threshold: 0,
// })
// imgObserver.observe(imgs[0],imgs[1]);
