import { revealCategories, hideCategories, categoriesTab } from './homePage.js';
//////////////////////////////////////////////////////////
// This javascript file is for all of the categories pages
/////////////////////////////////////////////////////////

////////////////////////////////////////////////
// revealCategories;
// hideCategories;

// Image flipper
const frontImages = document.querySelectorAll('.front-image');
const rearImages = document.querySelectorAll('.rear-image');

export const fronFlipper = frontImages.forEach(img =>
  img.addEventListener('mouseover', function () {
    img.style.opacity = 0;
    rearImages.forEach(img => (img.style.opacity = 1));
  })
);

export const backFlipper = frontImages.forEach(img =>
  img.addEventListener('mouseleave', function () {
    img.style.opacity = 1;
    rearImages.forEach(img => (img.style.opacity = 0));
  })
);

//////////////////////////////////////////////////

//////////////////////////////////////////////////
const cart = [];

const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartNumber = document.querySelector('.cart-number');

const addToCartFn = function () {
  let cartNewValue = 0;
  cartNewValue = Number(cartNumber.textContent) + 1;
  cartNumber.textContent = cartNewValue;
  console.log(cartNewValue);
};


//////////////////////////////////////////////////

const bodyCheck = document.body.id.includes('categories');

export const checkId = function () {
  if (!bodyCheck) return;
  categoriesTab.addEventListener('mouseover', revealCategories);
  categoriesTab.addEventListener('mouseleave', hideCategories);
  addToCartBtns.forEach(btn => btn.addEventListener('click', addToCartFn));
};