// Variables and data types
// A variable is a storage location
// it's used to hold data

let x = 1;
let y = 2;
let sum = x + y;

console.log(sum);

var num = 10;
let num1 = 3;
const num2 = 4;

// Data Types: String, Number, Boolean, Null, Object
// String

const name = 'John';
const greeting = 'Hello';
const note = "Hi, I'm John";
const course = `JavaScript`;
const count = '45';
const convertCount = Number(count);

console.log(name);
console.log(greeting + ', ' + name + '.'); // old way of concatenating
console.log(`${greeting}, ${name} - Welcome aboard!.`);

// Number
const a = 10;
const b = 12;
const c = 4.2;

console.log(a + b);
console.log(convertCount + a);

// confirming the data types
console.log(typeof name);
console.log(typeof a);
console.log(typeof c);

let person;
person = 'John Doe';

console.log(person);

// Boolean
const isLoggedIn = false;
const isLoggedOut = false;

console.log(isLoggedOut);

// if (isLoggedIn) {
//   window.alert('Welcome');
// } else {
//   window.alert('Not logged in');
// }

// Undefined
let result;
console.log(result);

function sayHello(name, greeting) {
  console.log(`${greeting}, ${name}`);
}

const welcomeUser = sayHello('John', 'Hello');
console.log(welcomeUser);

// Null
let user = null;
console.log(user);
console.log(typeof user);

if (user === null) {
  console.log('No user');
}

// The 6 falsy values — memorise these
false;
0;
(''); // empty string
null;
undefined;
NaN;

let teamLead = '';

if (teamLead) {
  console.log('Hello, ' + teamLead);
} else {
  console.log('Team Lead not found!');
}

// Type conversion
let level1 = 14;
let level2 = '13';
let convertLevel2 = Number(level2);
let level3 = '3.14n';
let convertLevel3 = parseFloat(level3);

// find the sum of level1 + level2
console.log(level1 + convertLevel2);

console.log(`level 3's new value is: ${convertLevel3}`);

// find the sum of level1 and level3
console.log(level1 + convertLevel3);

let num3 = 324;

//convert to string and print to the console
console.log(String(num3));
(13).toString();

let num4 = 255;

console.log(num4);
let convertNum4ToString = String(num4);

console.log(num4.toString(16));
