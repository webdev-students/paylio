// Control Flow - Conditionals (Making decisions in your code)
// if / else if / else

// Grade checker
let grade = 110;

if (grade >= 50 && grade <= 100) {
  console.log(`Grade: ${grade} - Excellent`);
} else if (grade >= 30 && grade <= 49) {
  console.log(`Grade: ${grade} - Good`);
} else if (grade <= 29) {
  console.log(`Grade: ${grade} - Not good`);
} else {
  console.log(`Grade: ${grade} - Exceptional`);
}

// Create an conditional statement that checks if a user is
// an adult or a child (cap age: 18)

let age = 5;
if (age < 18) {
  console.log(`Child`);
} else {
  console.log(`Adult`);
}

// Ternary operator ? (then) : (otherwise)
const userStatus = age > 18 ? 'Adult' : 'Child';
console.log(userStatus);

// create a conditional statement using ternary operators
// if the user and password are truthy, print logged in
// else (i.e. they're falsy) - print Not logged in

let username = 'Johndoe';
const password = '1234';

const loginStatus = username && password ? 'Logged in' : 'Not logged in';
console.log(loginStatus);
