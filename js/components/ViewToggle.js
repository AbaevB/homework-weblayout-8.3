// js/components/ViewToggle.js

export default class ViewToggle {
  constructor(gridViewSelector, listViewSelector, containerSelector) {
    this.gridViewEl = document.querySelector(gridViewSelector);
    this.listViewEl = document.querySelector(listViewSelector);

    this.infoTopEl = document.querySelector('#info-top');
    this.listEl = document.querySelector(containerSelector);
    this.listItemEls = document.querySelectorAll('.info__list-item');
    this.cardEls = document.querySelectorAll('.info-card');

    // Устанавливаем начальное состояние: список активен
    this.setGrid(false, false);

    this.init();
  }

  init() {
    this.gridViewEl.addEventListener('click', () => this.setGrid(true));
    this.listViewEl.addEventListener('click', () => this.setGrid(false));
  }

  setGrid(isGrid, updateActiveClass = true) {
    const action = isGrid ? 'add' : 'remove';

    this.infoTopEl.classList[action]('info__top--grid');
    this.listEl.classList[action]('info__list--grid');
    this.listItemEls.forEach(item => item.classList[action]('info__list-item--grid'));
    this.cardEls.forEach(card => card.classList[action]('info-card--grid'));

    if (updateActiveClass) {
      this.listViewEl.classList.toggle('info__top-toggler--active', !isGrid);
      this.gridViewEl.classList.toggle('info__top-toggler--active', isGrid);
    }
  }
}
