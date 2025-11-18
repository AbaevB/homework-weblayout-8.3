document.addEventListener('DOMContentLoaded', function(){
  const gridViewEl = document.querySelector('#grid-view');
  const listViewEl = document.querySelector('#list-view');
  const listEl = document.querySelector('#list');
  const cardEls = document.querySelectorAll('.info-card');

  gridViewEl.addEventListener('click', () => {
    toggleGrid(true);
  });

  listViewEl.addEventListener('click', () => {
    toggleGrid(false);
  });


  function toggleGrid(isGrid) {
    if (isGrid) {
      listEl.classList.add('info__list--grid');
      cardEls.forEach(card => card.classList.add('info-card--grid'));
    } else {
      listEl.classList.remove('info__list--grid');
      cardEls.forEach(card => card.classList.remove('info-card--grid'));
    }
  }
});
