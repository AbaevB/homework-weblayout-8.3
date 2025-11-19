document.addEventListener('DOMContentLoaded', function () {
  const gridViewEl = document.querySelector('#grid-view');
  const listViewEl = document.querySelector('#list-view');
  const infoTopEl = document.querySelector('#info-top');
  const listEl = document.querySelector('#list');
  const listItemEls = document.querySelectorAll('.info__list-item');
  console.log(listItemEls);
  const cardEls = document.querySelectorAll('.info-card');

  gridViewEl.addEventListener('click', () => {
    toggleGrid(true);
  });

  listViewEl.addEventListener('click', () => {
    toggleGrid(false);
  });


  function toggleGrid(isGrid) {
    if (isGrid) {
      infoTopEl.classList.add('info__top--grid');
      listEl.classList.add('info__list--grid');
      listItemEls.forEach(item => item.classList.add('info__list-item--grid'));
      cardEls.forEach(card => card.classList.add('info-card--grid'));
    } else {
      infoTopEl.classList.remove('info__top--grid');
      listEl.classList.remove('info__list--grid');
      listItemEls.forEach(item => item.classList.remove('info__list-item--grid'));
      cardEls.forEach(card => card.classList.remove('info-card--grid'));
    }
  }
});
