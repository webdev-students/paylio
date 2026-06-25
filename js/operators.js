// Arithmetic operators
// + - * / % **

console.log(10 + 3);
console.log(10 % 3); // The remainder after division has been done
console.log(2 ** 3); // raised to the power of

// Increment, decrement, shorthand assignment
let x = 5;
x++; // x + 1 (now x = 6)
x += 10; // x = x + 10 (now x = 16)
++x; // x = 17
x %= 3;
console.log(x);

let y = 10;
y--;
y -= 5; // y = y - 5
y /= 2; // y = y / 2
console.log(y);

// use the modern concatenation method to print this in the console
// in this exact format
// Hello welcome.
// Glad to have you onboarded!

console.log(`
Hello welcome.
Glad to have you onboarded!`);

// Comparison operators: > < >= <=
console.log(5 > 3);
console.log(4 < 1);
console.log(3 >= 2);
console.log(4 <= 1);

console.log(5 == '5');
console.log(5 === '5');

console.log(4 != '4');
console.log(4 !== '4');

// AND - &&
// OR - ||

let user = 'John';
let password = 'abcd';

if (user && password) {
  console.log(`User logged in: ${user}`);
} else if (user || password) {
  console.log('some credentials are missing');
} else {
  console.log('User not logged in.');
}
