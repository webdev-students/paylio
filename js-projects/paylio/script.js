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

// Faq section
let faqOpenToggle1 = document.querySelector('.faq-toggle-open-1');
let faqCloseToggle1 = document.querySelector('.faq-toggle-close-1');
let faqAnswer1 = document.querySelector('.faq-answer-1');

faqOpenToggle1.addEventListener('click', () => {
  faqAnswer1.style.display = 'block';
  faqCloseToggle1.style.display = 'flex';
  faqOpenToggle1.style.display = 'none';
});
faqCloseToggle1.addEventListener('click', () => {
  faqAnswer1.style.display = 'none';
  faqCloseToggle1.style.display = 'none';
  faqOpenToggle1.style.display = 'flex';
});

let faqOpenToggle2 = document.querySelector('.faq-toggle-open-2');
let faqCloseToggle2 = document.querySelector('.faq-toggle-close-2');
let faqAnswer2 = document.querySelector('.faq-answer-2');

faqOpenToggle2.addEventListener('click', () => {
  faqAnswer2.style.display = 'block';
  faqCloseToggle2.style.display = 'flex';
  faqOpenToggle2.style.display = 'none';
});
faqCloseToggle2.addEventListener('click', () => {
  faqAnswer2.style.display = 'none';
  faqCloseToggle2.style.display = 'none';
  faqOpenToggle2.style.display = 'flex';
});

let faqOpenToggle3 = document.querySelector('.faq-toggle-open-3');
let faqCloseToggle3 = document.querySelector('.faq-toggle-close-3');
let faqAnswer3 = document.querySelector('.faq-answer-3');

faqOpenToggle3.addEventListener('click', () => {
  faqAnswer3.style.display = 'block';
  faqCloseToggle3.style.display = 'flex';
  faqOpenToggle3.style.display = 'none';
});
faqCloseToggle3.addEventListener('click', () => {
  faqAnswer3.style.display = 'none';
  faqCloseToggle3.style.display = 'none';
  faqOpenToggle3.style.display = 'flex';
});

let faqOpenToggle4 = document.querySelector('.faq-toggle-open-4');
let faqCloseToggle4 = document.querySelector('.faq-toggle-close-4');
let faqAnswer4 = document.querySelector('.faq-answer-4');

faqOpenToggle4.addEventListener('click', () => {
  faqAnswer4.style.display = 'block';
  faqCloseToggle4.style.display = 'flex';
  faqOpenToggle4.style.display = 'none';
});
faqCloseToggle4.addEventListener('click', () => {
  faqAnswer4.style.display = 'none';
  faqCloseToggle4.style.display = 'none';
  faqOpenToggle4.style.display = 'flex';
});

let faqOpenToggle5 = document.querySelector('.faq-toggle-open-5');
let faqCloseToggle5 = document.querySelector('.faq-toggle-close-5');
let faqAnswer5 = document.querySelector('.faq-answer-5');

faqOpenToggle5.addEventListener('click', () => {
  faqAnswer5.style.display = 'block';
  faqCloseToggle5.style.display = 'flex';
  faqOpenToggle5.style.display = 'none';
});
faqCloseToggle5.addEventListener('click', () => {
  faqAnswer5.style.display = 'none';
  faqCloseToggle5.style.display = 'none';
  faqOpenToggle5.style.display = 'flex';
});

let faqOpenToggle6 = document.querySelector('.faq-toggle-open-6');
let faqCloseToggle6 = document.querySelector('.faq-toggle-close-6');
let faqAnswer6 = document.querySelector('.faq-answer-6');

faqOpenToggle6.addEventListener('click', () => {
  faqAnswer6.style.display = 'block';
  faqCloseToggle6.style.display = 'flex';
  faqOpenToggle6.style.display = 'none';
});
faqCloseToggle6.addEventListener('click', () => {
  faqAnswer6.style.display = 'none';
  faqCloseToggle6.style.display = 'none';
  faqOpenToggle6.style.display = 'flex';
});
