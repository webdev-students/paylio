const heading1 = document.querySelector('.learn');

heading1.textContent = 'Machine Learning';

function add() {
  const number1 = document.getElementById('num1').value;
  const number2 = document.getElementById('num2').value;
  const calcBtn = document.querySelector('#calculate');
  const result = document.querySelector('.answer');

  const sum = Number(number1) + Number(number2);
  result.textContent = sum;
}
