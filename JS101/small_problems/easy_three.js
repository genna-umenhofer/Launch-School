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
/* 
PROBLEM:
- The input is a line of text
- The output is a box and the line of text inside

- The box is as tall as the number of lines of text +2
(one on top one on bottom)
  - minimum 3 lines if string length is 0
- The box is as long as the number of characters +2
(one left and one right)
  - minimum 2 characters if string length is 0
- The corners of the box are made of a + sign

ALGORITHM:
determine the number of characters in the string => repeat that many '-' in the top row => repeat that many spaces in the above row => add the | to the start and end of the quote => below rows => ditto top row for the bottom row => print it
*/

function logInBox(quote) {
  let numberOfChars = quote.length;
  let topBottomRow = '+-' + '-'.repeat(numberOfChars) + '-+';
  let spacerRow = '| ' + ' '.repeat(numberOfChars) + ' |';
  let quoteRow = '| ' + quote + ' |';
  console.log(topBottomRow);
  console.log(spacerRow);
  console.log(quoteRow);
  console.log(spacerRow);
  console.log(topBottomRow);
}

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
/*
PROBLEM:
- The input is an integer
- The output is an integer
  - If the number is a double number then the output is the double number
  - If the output is not a double number then the output is the number multiplied by two

- A double number is:
  - an even number of digits (length 2, 4, 6, etc)
  - the left-side digits (length/2) and right side digits are the same

ALGORITHM:
is number even digits? => are left & right halves equal? => return number

any no answers return number x 2 instead

num => evenDigits (helper function) => boolean
- determine the remainder of the length of the number divided by 2
- if it's 0 return true (it's even in length)
- otherwise return false (it's not even in length)

num => equalHalves (helper function) => boolean
- save the left half of the number (length / 2) to a variable
- save the right half of the number (length / 2) to a variable
- return compare the two halves for strict equality
*/

function twice(num) {
  if (evenDigits(num) && equalHalves(num)) return num;
  return num * 2;
}

function evenDigits(num) {
  if (num.toString().length % 2 === 0) return true;
  return false;
}

function equalHalves(num) {
  let halfNum = (num.toString().length) / 2
  let leftHalf = num.toString().slice(0, halfNum);
  let rightHalf = num.toString().slice(halfNum);
  return leftHalf === rightHalf;
}

//grade book ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
PROBLEM:
- The input is three integer scores
- The output is a string letter grade

- The scores will always be between 0 and 100
- The letter grade is based on the average of all three scores
- The grade list is rounded to two digits (no decimals)

ALGORITHM:
find the average => compare the average to the score list => return the score that represents the average

score, score, score => findAverage => average
- add the three scores together
- divide by three
- round the answer?
- return the answer

average => findGrade => grade
- compare the score to each range of averages
- return the grade of the comparison that is true
*/

function getGrade(score1, score2, score3) {
  return findGrade(findAverage(score1, score2, score3));
}

function findAverage(score1, score2, score3) {
  let average = (Number(score1) + Number(score2) + Number(score3)) / 3;
  return average.toFixed(0);
}

function findGrade(average) {
  if (90 <= average && average <= 100) return 'A';
  if (80 <= average && average < 90) return 'B';
  if (70 <= average && average < 80) return 'C';
  if (60 <= average && average < 70) return 'D';
  if (0 <= average && average < 60) return 'F';
}

//clean up the words ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//what century is that? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

