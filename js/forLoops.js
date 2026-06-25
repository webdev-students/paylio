// Loops: repeating actions without repeating code
// print 1 - 5 using a loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// print from 10 - 15 using a for loop
for (let i = 10; i <= 15; i++) {
  console.log(i);
}

// print from 20 - 17 (this is backwards)
for (let p = 20; p >= 17; p--) {
  console.log(p);
}

const courses = ['html', 'css', 'javascript', 'nodejs'];
console.log(courses);
console.log(courses[0]);
// total length of the array
console.log(courses.length);

for (let i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

const places = ['Abuja', 'Ireland', 'Japan', 'Qatar', 'Singapore'];
// for..of
for (const place of places) {
  console.log(place);
}

for (let i = 0; i < places.length; i++) {
  console.log(places[i]);
}

const sizes = ['small', 'medium', 'large'];
// for...of
for (const size of sizes) {
  console.log(size);
}

// forEach
places.forEach((place) => {
  console.log(place);
});

places.forEach((place, index) => {
  console.log(`${index} - ${place}`);
});

// use for..of to print all values in the sizes array and add their index numbers
for (const [index, size] of sizes.entries()) {
  console.log(`${index} ${size}`);
}

// for...of is best for arrays
// for...in is best for objects

let person = {
  name: 'Ben',
  role: 'Developer',
  accessCode: 321,
};

const technologies = ['Python', 'Django', 'Java', 'JavaScript'];

console.log(person);
// use a for..in
for (const key in person) {
  console.log(`${key} - ${person[key]}`);
}

// create a for loop that prints from 1 - 10
for (let i = 1; i <= 10; i++) {
  if (i === 6) break; // the loop stops (doesn't even print 6)
  console.log(i);
}
console.log('---------');

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue; // it skips 5 and continues the loop
  console.log(i);
}

// Using a for loop, print from 10 - 30 only even numbers
// and skip 20 using the continue statement
// also, stop the loop before it gets 28 using the break statement

for (let i = 10; i <= 30; i += 2) {
  if (i === 20) continue;
  else if (i > 27) break;
  console.log(i);
}

console.log('--------------');

for (let i = 10; i <= 30; i++) {
  if (i % 2);
  else if (i === 20) continue;
  else if (i === 28) break;
  else console.log(i);
}
console.log('--------------');

for (let i = 10; i <= 30; i++) {
  if (i % 2 === 0) {
    if (i === 20) continue;
    if (i === 28) break;
    console.log(i);
  }
}

const numbers = [3, 7, 8, 9, 2, 4];
// Find the first value that's greater than 6 and print in the console
for (const num of numbers) {
  if (num > 6) {
    console.log(num);
    break;
  }
}
