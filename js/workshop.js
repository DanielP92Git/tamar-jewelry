import { revealCategories, hideCategories, categoriesList, categoriesTab } from './homePage';

// Workshop page images slider
///////////////////////////////////////
const images = document.querySelectorAll('.workshop-image');

let curImg = 0;
const maxImages = images.length;

const timeOut = function () {
  setTimeout(() => {
    goToImage();
  }, 1000);
};

const goToImage = function (slide) {
  images.forEach(img => (img.style.transform = `translateX(${-100 * slide}%)`));
  // images.forEach(img => (img.style.transform = `translateX(-100%)`));
  setTimeout(() => {
    nextImage();
  }, 3000);
};

const nextImage = function () {
  if (curImg === maxImages - 1) {
    curImg = 0;
  } else {
    curImg++;
  }
  //   console.log(curImg);
  goToImage(curImg);
};

// Workshop END
///////////////////////////////////////

const bodyCheck = document.body.id.includes('workshop');

export const checkId = function () {
  if (!bodyCheck) return;
  categoriesTab.addEventListener('mouseover', revealCategories);
  categoriesTab.addEventListener('mouseleave', hideCategories);
  timeOut();
};
