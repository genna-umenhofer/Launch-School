//Isn't it Odd? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function isNumberOdd(number) {
  return (Math.abs(number) % 2 > 0);
}

isNumberOdd(3);

//Odd Numbers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function findOddNumbers() {
  for (let num = 0; num <= 99; num += 1) {
    if (isNumberOdd(num)) {
      console.log(num);
    }
  }
}

findOddNumbers();

//Even Numbers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function findEvenNumbers() {
  for (let num = 1; num <= 99; num += 1) {
    if (!isNumberOdd(num)) {
      console.log(num);
    }
  }
}

findEvenNumbers();

//How big is the room? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const readline = require('readline-sync');
const SQ_METER_TO_SQ_FEET = 10.7639;

console.log('What is the length of the room in meters?');
let lengthOfRoom = readline.question();

console.log('What is the width of the room in meters?');
let widthOfRoom = readline.question();

function calculateSquareMeter(length, width) {
  return Number(length) * Number(width);
}

function calculateSquareFeet(area) {
  return area * SQ_METER_TO_SQ_FEET;
}

console.log(`The area of the room is ${calculateSquareMeter(lengthOfRoom, widthOfRoom).toFixed(2)} square meters (${calculateSquareFeet(calculateSquareMeter(lengthOfRoom, widthOfRoom)).toFixed(2)} square feet).`);

//Tip Calculator ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Sum or Prod Consec Int ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Short Long Short ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Leap Year Part 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Leap Year Part 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Multiples of 3 and 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//UTF-16 String Value ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~