import ViewToggle from './components/ViewToggle.js';
import BurgerMenu from './components/BurgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  new ViewToggle('#grid-view', '#list-view', '#list');
  new BurgerMenu('.header__menu', '.header__burger-menu', '.header');
});
