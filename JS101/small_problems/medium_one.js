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


//fib nums recursion ~~~~~~~~~~~~~~~~~~~~~~~~~~


//fib nums procedural ~~~~~~~~~~~~~~~~~~~~~~~~~


//fib numbs memoization ~~~~~~~~~~~~~~~~~~~~~~~

