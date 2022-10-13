//rotation 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: array
Output: array

- if type is not an array, return undefined
- if input array is empty, return an empty array
- move the first element to the end of the array
- do not mutate the original array

Data:

array => copy of array => first elem remove => append first elem => return array

Algorithm:

- check to see if the array is an array or is empty
  - if not array return undefined
  - if empty return empty array
- save a copy of the array to a variable
- save the first item as a variable
- remove the first item from the copy
- add the first item to the end of the copy
- return the array
*/

function rotateArray(array) {
  if (!validateArrayType(array)) return undefined;
  if (validateArrayLength(array)) return [];

  let firstItem = array[0];
  let arrayCopy = array.slice(1);
  arrayCopy.push(firstItem);

  return arrayCopy;
}

function validateArrayLength(array) {
  return array.length === 0;
}

function validateArrayType(array) {
  return Array.isArray(array);
}

console.log(rotateArray([]));
console.log(rotateArray([1, 2, 3]));
console.log(rotateArray('hello'));

//rotation 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem
Input: number, count
Output: number

- The output is the number rearranged
- digit indicated becomes the last number
- the ending segment becomes the middle segment
- first segment stays the same

Algorithm:
- save the number as a string
- save the index as the length - count
- save the begining number as variable
- save the end of the number as a variable
- save the digit as a variable
- return the appended numbers beginning + end + digit
*/

function rotateRightmostDigits(number, count) {
  let numString = number.toString();
  let index = (numString.length - count);

  let beginning = numString.slice(0, index);
  let end = numString.slice(index + 1);
  let num = numString[index];

  return Number(beginning + end + num);
}

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 6));

//rotation 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//stack mach interp ~~~~~~~~~~~~~~~~~~~~~~~~~~


//word to digit ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: string
Output: string

- The output should have all number words replace with digits
- 'five' becomes 5
- assuming 0-9 digits
- all words are separated by spaces
- need to remove punctuation somehow? Regex?

Data:
string => array => iterate => switch out number words => join => string

Algorithm:
- save a new empty array
- save the string as an array of words
- iterate through the array

- check for punctuation is true
  - save the word as a variable
  - save the punctuation as a variable
  - push the word as a number
  - push the punctuation

- if check punctuation is false
  - if the word matches, push the number instead
  - otherwise, push the current word
  
- return new array joined together

word => check punctuation => punctuation
- see if the last index is a letter
- if it is, return false
- if not, return true (has punctuation)

word => swap for number => number string
- switch statement, check word for each number
- return number string or just word (default)
*/

function wordToDigit(string) {
  let newArray = [];
  let stringArray = string.split(' ');

  stringArray.forEach(word => {
    if (checkPunctuation(word)) {
      let separateWord = word.slice(0, (word.length - 1));
      let punctuationMark = word[word.length-1];

      newArray.push(swapForNumber(separateWord) + punctuationMark);
      
    } else {
      newArray.push(swapForNumber(word));
    }
  });

  return newArray.join(' ');
}

function checkPunctuation(word) {
  let idx = (word.length) - 1;
  let separateWord = word[idx];
  return (!(separateWord >= 'a' && separateWord <= 'z'));
}

function swapForNumber(word) {
  switch(word) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
    case 'zero':
      return '0';
    default:
      return word;
  }
}

console.log(wordToDigit('The weight is done.'));

//fib nums recursion ~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: number (n)
Output: number (fibNum)

- the output is the Fibonacci number at the input number's place, basically you do the fibonacci sequence n times and return that end number

Examples:
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

Algorithm:
- we want to run the fibonacci sequence n times and return the result
- the fibonacci sequence starts at 0 + 1, then 1 + 1, then 1 + 2 = 3
- anything less than or equal to 2 should return 1 because that's the first and second fib number. An N of 1 = 1 and an N of 2 = 1
- everything else should take the value of the number and the one before it, so n - 2 and n - 1

*/


function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
}

console.log(fibonacci(12));

//fib nums procedural ~~~~~~~~~~~~~~~~~~~~~~~~~
function fib(num) {
  let counter = num;
  let currentNum = 1;
  let prevNum = 0;

  while (counter > 1) {
    let newCurrent = currentNum + prevNum;
    prevNum = currentNum;
    currentNum = newCurrent;
    counter--;
  }

  return currentNum;
}

console.log(fib(11));

//fib numbs memoization ~~~~~~~~~~~~~~~~~~~~~~~
let fibValues = {};

function memoFib(num) {
  if (num <= 2) {
    return 1;
  } else if (fibValues[num]) {
    return fibValues[num];
  } else {
    fibValues[num] = memoFib(num - 1) + memoFib(num - 2);
    return fibValues[num];
  }
}

console.log(memoFib(20));
