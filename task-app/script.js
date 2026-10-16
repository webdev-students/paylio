const iconOpen = document.querySelector('.mobile-menu-icon');
const iconClose = document.querySelector('.mobile-menu-icon-close');
const mobileMenuSection = document.querySelector('.mobile-menu');

iconOpen.addEventListener('click', () => {
  mobileMenuSection.style.display = 'block';
  iconOpen.style.display = 'none';
  iconClose.style.display = 'flex';
});

iconClose.addEventListener('click', () => {
  mobileMenuSection.style.display = 'none';
  iconOpen.style.display = 'flex';
  iconClose.style.display = 'none';
});
