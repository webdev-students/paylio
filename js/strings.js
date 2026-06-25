const message = 'Welcome to this platform';

console.log(message);
console.log(message.length);
console.log(message[0]);
// print the 4th letter
console.log(message[3]);
// print the last letter
console.log(message[message.length - 1]);

// .at
console.log(message.at(1));
console.log(message.at(-1));
// print the third-to-last letter
console.log(message.at(-3));

console.log(message.includes('Hello'));
console.log(message.includes('platform'));

console.log(message.startsWith('Hello'));
console.log(message.startsWith('Welcome'));

console.log(message.indexOf('o'));
// find the index of t
console.log(message.indexOf('t'));
console.log(message.indexOf('to'));

console.log(message.slice(0, 5));
// print the last 6 letter in that string
console.log(message.slice(-6));

// turn a string into an array
console.log('a,b,c,d'.split(','));
console.log('12.13.14.54.23'.split('.'));
console.log('sam grace glory praise'.split(' '));

// convert message to an array
console.log(message.split(' '));

// convert message to uppercase and print in the console
console.log(message.toUpperCase());
console.log(message.toLowerCase());

const note = "  It's a new era. The era of coding!  ";
// remove white space from the start/end/both
console.log(note);
console.log(note.trim());
console.log(note.trimEnd());
console.log(note.trimStart());

console.log(note.replace('era', 'age'));
console.log(note.replaceAll('era', 'age'));

const id = '001';
console.log(id.padStart(5, 2));
// add to the end of the id (-) making it a total of 6
console.log(id.padEnd(6, '-'));

// repeat
console.log(' Google '.repeat(4));

const print = 'Create';
for (const p of print) {
  console.log(p);
}

// Numbers, Arrays, Objects, The 'this' keyword, classes
// Error handling, The DOM, JSON, Async JS, Modern JS, The Date object
