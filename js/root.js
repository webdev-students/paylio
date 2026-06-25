// variables
const fName = 'John';
const lName = 'Doe';
const fullName = `${fName} ${lName}`;
const pwd = 'abc';
const phone = 1234;
const num = 12.2;
const num2 = '3.14n';

console.log(`Hello, ${fullName}`);

// How to know the type of data it is:
console.log(typeof phone);
console.log(typeof num);

// convert num to whole
console.log(Math.round(num));
console.log(parseInt(num));

// convert num2 to the nearest decimal
console.log(parseFloat(num2));

// write an if else statement that's gonna print to the console
// Logged in (if both fullname and pwd have values)
// also if only fullname has a value, it should print (Password not found)
// if only password has a value, print (Name not found)
// if both have no value, print (System Error)
if (fullName && pwd) {
  console.log('Logged in');
} else if (fullName && !pwd) {
  console.log('Password not found');
} else if (pwd && !fullName) {
  console.log('Name not found');
} else {
  console.log('System Error');
}

let x;
x = 5;
x %= 2; // x = x % 2
console.log(x);

// Loops
// print numbers 1 - 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// what's the starting value? 1
// first - print i which is 1
// increment i (i++) - 2
// 2 <= 5? prints 2

// print from 10 - 1 backwards
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// print from 10 - 1 backwards but only odd numbers
for (let i = 10; i >= 1; i--) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// print from 10 - 1 backwards but only even numbers
for (let r = 10; r >= 1; r--) {
  if (r % 2 == 0) {
    console.log(r);
  }
}

// Create a for loop that prints 100 - 5 backwards (only odd numbers)

// Using a while loop, print 5 - 10
let i = 5;
while (i <= 10) {
  console.log(i);
  i++;
}

// print 5 - 10 using do while loop
y = 5;
do {
  console.log(y);
  y++;
} while (y <= 10);

// print 10 - 25 only odd numbers using a while loop
let a = 11;
while (a <= 25) {
  console.log(a);
  a += 2; //a = a + 2
}

console.log('-----------');

// print 10 - 25 only even numbers using a do while loop
let k = 10;
do {
  console.log(k);
  k += 2;
} while (k <= 25);

let m = 10;
do {
  if (m % 2 == 0) console.log(m);
  m++;
} while (m <= 25);

let courses = ['html', 'css', 'javascript', 'nodejs'];
// print in the console in the array values and the total value
// ...: 4 in total
console.log(`${courses}: ${courses.length} in total`);

// print the array
console.log(courses);

// print the first value of the array
console.log(courses[0]);

// loop through an array and print in the console
for (let i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

// use a loop to print the array out in this format
// 1 - html
// 2 - css ...

for (let i = 0; i < courses.length; i++) {
  console.log(`${i + 1} - ${courses[i]}`);
}

// Loop through the array and print backwards in the same format:
// 4 - nodejs
// 3 - javascript...

// Mr Uche's
for (let i = 0; i < courses; i--) {
  console.log(`${courses.length[i]}`);
}

// Martin's
for (i = 4; i < courses.length; i--) {
  console.log(`{i - 1}- ${courses[i]}`);
}

// Ebere's
for (let b = 4; b > courses.length; b--) {
  console.log(`${b - 1} - ${courses.length[b]}`);
}

// Jeff's

// Praise's
for (i = courses.length; i >= 1; i--) {
  console.log(`${i}- ${courses[i - 1]}`);
}

// Nathan's
for (n = courses.length - 1; n >= 0; n--) {
  console.log(`${n + 1} - ${courses[n]}`);
}
