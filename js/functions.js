function calculator() {
  return 1 + 1;
}
function calculate() {
  console.log(1 + 3);
}

const calculateFunction = () => {
  console.log(1 + 3);
};

console.log(calculator());
calculate();

function greeting(name, role) {
  return `Hello, ${name}
Role: ${role}`;
}

console.log(greeting('John', 'Developer'));

// Default parameters
function greet(name = 'John Doe', welcomeMsg = 'Hi') {
  return `${welcomeMsg}, ${name}`;
}

console.log(greet('Peter', 'Welcome aboard'));

// Rest Parameters
function summation(...numbers) {
  // numbers is an array of all arguments passed
  let total = 0;
  for (const n of numbers) {
    total += n; // total = total + n
  }
  return total;
}

console.log(summation(3, 4, 5, 6));

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5));

// converting to arrow function
const division = (a, b) => {
  return a / b;
};

console.log(division(10, 2));

const add = (a) => a + a; // single param - no () needed
const divide = (x, y) => x / y; // Multiple param - () is needed
const subtract = () => 'Subtracted'; // No param - () is required

console.log(add(2));

// Scope - where variables live
// global-scope variable
const globalVar = 'This is a global variable';

function status() {
  // function scope - only accessible in this function
  const localVar = 'I am a local variable';
  console.log(globalVar);
  console.log(localVar);
}

status();
// console.log(localVar);
console.log(globalVar);
