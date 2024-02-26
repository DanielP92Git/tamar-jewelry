import { revealCategories, hideCategories, categoriesTab } from './homePage';

const bodyCheck = document.body.id.includes('about');

export const checkId = function () {
  if (!bodyCheck) return;
  categoriesTab.addEventListener('mouseover', revealCategories);
  categoriesTab.addEventListener('mouseleave', hideCategories);
};
