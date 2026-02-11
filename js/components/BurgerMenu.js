// js/components/BurgerMenu.js

export default class BurgerMenu {
  constructor(menuButtonSelector, menuSelector, headerSelector) {
    this.menuButton = document.querySelector(menuButtonSelector);
    this.menu = document.querySelector(menuSelector);
    this.header = document.querySelector(headerSelector);

    this.isOpen = false;

    this.init();
  }

  init() {
    this.menuButton.addEventListener('click', () => {
      this.toggle();
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;

    // Переключаем модификаторы
    this.header.classList.toggle('header--active', this.isOpen);
    this.menu.classList.toggle('header__burger-menu--open', this.isOpen);
    this.menuButton.classList.toggle('header__menu--active', this.isOpen);

    // Меняем иконку: бургер ↔ крестик
    const burgerIcon = this.menuButton.querySelector('.header__menu-icon');
    const closeIcon = this.menuButton.querySelector('.header__menu-icon--close');

    if (this.isOpen) {
      burgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      burgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }

    // Блокируем скролл страницы при открытом меню
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }
}
