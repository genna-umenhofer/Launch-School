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

const readline = require('readline-sync');
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
console.log(`The total bill is $${totalBill}.`)

//Sum or Prod Consec Int ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let userInteger = Number(readline.question());

console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
let operation = readline.question();

function findTheSum(integer) {
  let totalSum = 1;
  //i starts at 2 to account for totalSum starting at 1
  //otherwise totalSum will be 1 more than the actual answer
  //starting totalSum at 0 resulted in totalSum always being 0
  for (let i = 2; i <= integer; i += 1) {
    totalSum += i;
  }
  return totalSum;
}

function findTheProduct(integer) {
  let totalProduct = 1;
  for (let i = 1; i <= integer; i += 1){
    totalProduct *= i;
  }
  return totalProduct;
}

if (operation === "s") {
  let totalSum = findTheSum(userInteger);
  console.log(`The sum of the integers between 1 and ${userInteger} is ${totalSum}.`);
} else if (operation === "p") {
  let totalProduct = findTheProduct(userInteger);
  console.log(`The product of the integers between 1 and ${userInteger} is ${totalProduct}.`)
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

//Leap Year Part 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Multiples of 3 and 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//UTF-16 String Value ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~