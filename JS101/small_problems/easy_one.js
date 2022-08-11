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

//const readline = require('readline-sync');
const PERCENT_TO_DECIMAL = 100;

console.log('What is the bill?');
let initialBill = Number(readline.question());

console.log('What is the tip percentage?');
let tipPercentage = Number(readline.question());

function determineTipAmount(bill, percent) {
  return bill * (percent / PERCENT_TO_DECIMAL);
}

let totalTip = determineTipAmount(initialBill, tipPercentage);

let totalBill =  totalTip + initialBill;

console.log(`The tip is $${totalTip}.`);
console.log(`The total bill is $${totalBill}.`);

//Sum or Prod Consec Int ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//const readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let userInteger = Number(readline.question());

console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
let operation = readline.question();

function findTheSum(integer) {
  let totalSum = 1;
  //i starts at 2 to account for totalSum starting at 1
  //otherwise totalSum will be 1 more than the actual answer
  //starting totalSum at 0 resulted in totalSum always being 0
  for (let idx = 2; idx <= integer; idx += 1) {
    totalSum += idx;
  }
  return totalSum;
}

function findTheProduct(integer) {
  let totalProduct = 1;
  for (let idx = 1; idx <= integer; idx += 1) {
    totalProduct *= idx;
  }
  return totalProduct;
}

if (operation === "s") {
  let totalSum = findTheSum(userInteger);
  console.log(`The sum of the integers between 1 and ${userInteger} is ${totalSum}.`);
} else if (operation === "p") {
  let totalProduct = findTheProduct(userInteger);
  console.log(`The product of the integers between 1 and ${userInteger} is ${totalProduct}.`);
} else {
  console.log('Please try again.');
}

//Short Long Short ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function shortLongShort(stringOne, stringTwo) {
  let newString = '';

  if (stringOne.length > stringTwo.length) {
    newString = newString.concat(stringTwo, stringOne, stringTwo);
  } else {
    newString = newString.concat(stringOne, stringTwo, stringOne);
  }

  console.log(newString);
}

shortLongShort("abc", "defgh");
shortLongShort("abcde", "fgh");
shortLongShort("", "xyz");

//Leap Year Part 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function isLeapYear(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
}

isLeapYear(2016);

//Leap Year Part 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function gregorianLeapYear(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
}

function julianLeapYear(year) {
  return ((year % 4 === 0));
}

function isLeapYear2(year) {
  if (year >= 1752) {
    return gregorianLeapYear(year);
  } else if (year < 1752) {
    return julianLeapYear(year);
  }
}

isLeapYear2(2015);

//Multiples of 3 and 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function multisum(number) {
  let num = number;
  let count = 0;
  while (num > 0) {
    if ((num % 3 === 0) || (num % 5 === 0)) {
      count += num;
      num -= 1;
    } else {
      num -= 1;
    }
  }
  return count;
}

multisum(5);

//UTF-16 String Value ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function utf10Value(str) {
  let totalCount = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    let currentCharVal = Number(str.charCodeAt(idx));
    totalCount += currentCharVal;
  }
  return totalCount;
}

utf10Value('Launch School');