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
- The input will be a positive integer 'n'
- The output will be a string
  - The string will be a right triangle made of stars '*'
  - The hypotenuse will go from lower left to upper right
  - All sides will have 'n' number of stars

- length of string is always 'n'
- first string has n-1 spaces before the star
- second string has n-2 spaces... 
- so on until n-n which is 'n' stars and no spaces

EXAMPLES:
triangle(5);

    *
   **
  ***
 ****
*****

DATA:

5 => 
['    *'] =>
['    *', '   **'] =>
['    *', '   **', '  ***']=> 
['    *', '   **', '  ***', ' ****'] =>
['    *', '   **', '  ***', ' ****', '*****'] => 
    *
   **
  ***
 ****
*****

ALGORITHM:
- initialize an empty array to store the star strings
- if array length is < n
  - addLineOfStars (helper function)
    - determineStarNumber (helper function) [OUTPUT number of stars in next line]
      - check the number of stars in the last array element
        - initialize lastStarLine to array.length - 1
        - make lastStarLin into an array of substrings
        - iterate through lastStarLine 
          - increment a counter if the element === *
      - add one to that number
      - output the new number
    - makeStarString (helper function)
      - initialize and empty string
      - concatenate n-number spaces
      - concatenate number of stars
      - return the string of stars
    -push the string of stars to the array
- otherwise if array length === n
  - for each element of the array, output the element
*/

function triangle(n) {
  let triangleArray = [];

  while (triangleArray.length < n) {
    triangleArray.push(addLineOfStars(n, triangleArray));
    console.log('triangArray = ' + triangleArray);
  }
  
  triangleArray.forEach(elem => console.log(elem));
  
}

function addLineOfStars(num, array) {
  return makeStarString(determineStarNumber(array), num);
}

//let array = [];
//console.log(addLineOfStars(4, array));

function makeStarString(number, num) {
  let starString = [];
  for (let counter = (num - number); counter > 0; counter -= 1) {
    starString.push(' ');
  }
  for (let counter = number; counter > 0; counter -= 1) {
    starString.push('*');
  }
  console.log('starString = ' + starString.join(''));
  return starString.join('');
}

function determineStarNumber(array) {
  console.log('array length = ' + array.length);
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;
  /*
  let lastStarLine = array[array.length - 1].split('');
  let counter = 0;
  lastStarLine.forEach(elem => {
    if (elem === '*') {
      counter += 1;
    }
  });
  console.log(counter);
  return counter;*/
  return array[array.length - 1];
}

triangle(5);


//madlibs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//doubles doubles ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//grade book ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//clean up the words ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//what century is that? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

