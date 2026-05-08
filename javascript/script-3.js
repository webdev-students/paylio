// operators: arithmetic, increment, decrement
// shorthand assignment
let score = 100;
score += 50; //score = score + 50
score -= 20;
score %= 5; // score = score % 5
score++;
score **= 9;
console.log(score);

// String concatenation and template literals
const firstName = 'Chris';
const level = 10;

// old way of concatenation
console.log('Hello, My name is ' + firstName + ". I'm in level " + level);

// New way of concatenation
console.log(`Hello, My name is ${firstName}. I'm in level ${level}`);

console.log(
  `${firstName.toUpperCase()} is a ${level >= 8 ? 'Pro' : 'Beginner'}`,
);

// Multi-line strings
const message = `
    Hello ${firstName},
    Thank you for signing up.
    Your Level is ${level}.
`;
console.log(message);

// comparison operators
console.log(5 > 3);
console.log(8 < 4);
console.log(5 <= 5);
console.log(10 >= 11);
console.log('-------------------------');

// ==
console.log(5 == '5');
console.log(0 == false);
console.log('' == false);
console.log(null == undefined);
console.log('-------------------------');

// ===
console.log(5 === '5');
console.log(0 === false);
console.log('-------------------------');

// != !==
console.log(5 != '5');
console.log(5 !== '5');
