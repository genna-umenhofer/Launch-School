//ddaaiillyy ddoouubbllee ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function crunch(string) {
  let words = string.split(' ');
  return words.map(word => compareLetters(word)).join(' ');
}

function compareLetters(word) {
  let reducedString = [];
  let counter = 0;
  while (counter < word.length) {
    if (word[counter] !== word[counter + 1]) {
      reducedString.push(word[counter]);
      counter++;
    } else {
      counter++;
    }
  }
  return reducedString.join('');
}

crunch('ddaaiilllyyy ddoouubbllee');

//bannerizer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//skipping for now

//stringy strings ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function stringy(num) {
  let newString = [];
  let toggle = 0;
  for (let counter = num; counter > 0; counter -= 1) {
    if (toggle === 0) {
      newString.push('1');
      toggle = 1;
    } else {
      newString.push('0');
      toggle = 0;
    }
  }
  return newString.join('');
}

console.log(stringy(6));    // "101010"

//fibonacci number location by length ~~~~~~~~~~~~~~~~~~
//skipping for now

//right triangles ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
PROBLEM:
- The input is a positive integer
- The output is a right triangle

- Each line has one more '*' than the previous line
- Each line has one less ' ' than the previous line
- The number of lines is === the integer
- ' ' go to the right of '*'

DATA:
n => '(n-1 spaces + 1 *'
n => '(n-2 spaces + 2 *'
...
n => '(n-n spaces + n *'

n = integer passed into function.
stars = integer subtracted from n to get spaces and represents the number of stars in a string => will be incremented by 1 for each time a line is run during the function

empty string => loop that increments stars and adds to string => log the string => repeat loop until n === 0

ALGORITHM:
START
- 
*/

function triangle(n) {
  let stars = 1;
  let spaces = ' ';
  let aster = '*';
  for (let counter = n; counter > 0; counter -= 1) {
    let starString = spaces.repeat(n - stars) + aster.repeat(stars);
    console.log(starString);
    stars += 1;
  }
}

triangle(5);

//madlibs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
PROBLEM:
- The input will be a user's noun, verb, adverb, and adjective
- The output will be a story that has those words in the correct sopts

- the strings will be all lower case when used in the story
- The story will be output one line at a time

ALGORITHM:
get user input => save user input to a variable for each word => log the story using the variables in the sentences
*/

const readline = require('readline');

console.log('Enter a noun: ');
let noun = readline.question;

console.log('Enter a verb: ');
let verb = readline.question;

console.log('Enter an adjective: ');
let adjective = readline.question;

console.log('Enter an adverb: ');
let adverb = readline.question;

console.log(`I learned a valuable lesson: Never leave home without your ${noun}.`);
console.log(`If you ${verb} away wihtout it, your hair will turn ${adjective} ${adverb}.`);

//doubles doubles ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//grade book ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//clean up the words ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//what century is that? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

