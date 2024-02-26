import { revealCategories, hideCategories, categoriesTab } from './homePage';

const bodyCheck = document.body.id.includes('contact-me');

export const checkId = function () {
  if (!bodyCheck) return;
  categoriesTab.addEventListener('mouseover', revealCategories);
  categoriesTab.addEventListener('mouseleave', hideCategories);
};
