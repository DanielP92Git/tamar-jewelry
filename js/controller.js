import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as categoriesFns from './categories.js';
import * as homeFn from './homePage.js';
import * as workshopFn from './workshop.js';
import * as aboutFn from './about.js';
import * as contactFn from './contactMe.js';

//----------------------------------------------------

const menuBars = document.querySelector('.menubars-svg');
const menuBarsSVG = document.querySelector('.menubars-toggle');

const changeSVG = function () {
  const parent = document.querySelector('.menubars-toggle');
  parent.classList.toggle('close');
  const check = parent.classList.contains('close');
  let icon = '-svg';
  icon = (!check ? 'close' : 'menubars') + icon;
  document.querySelector('use').setAttribute('href', `#${icon}`);
};
menuBars.addEventListener('click', changeSVG);

//////////////////////////////////////////////////
// Sticky navigation bar
//////////////////////////////////////////////////
// const menuHeight = menu.getBoundingClientRect().height;
const menu = document.querySelector('.menu');
const header = document.querySelector('header');

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

///////////////////////////////////////

const init = function () {
  homeFn.checkId();
  workshopFn.checkId();
  aboutFn.checkId();
  categoriesFns.checkId();
  contactFn.checkId();
};
init();

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// const getRect = parent.getClientRects()
// getRect.addEventListener('scroll', changeSVG);

// const generateMarkup = function () {
//   const parent = document.querySelector('.menubars-toggle');

//   const markup =
//   `<use xlink:href="#shoppingcart-svg"></use>`;

//   parent.remove(markup);

// };
