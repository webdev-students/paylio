let menuOpenIcon = document.querySelector('.menu-open');
let menuCloseIcon = document.querySelector('.menu-close');
let menuSection = document.querySelector('.menu-section');

menuOpenIcon.addEventListener('click', () => {
  menuSection.style.display = 'block';
  menuOpenIcon.style.display = 'none';
  menuCloseIcon.style.display = 'flex';
});

menuCloseIcon.addEventListener('click', () => {
  menuSection.style.display = 'none';
  menuOpenIcon.style.display = 'flex';
  menuCloseIcon.style.display = 'none';
});
