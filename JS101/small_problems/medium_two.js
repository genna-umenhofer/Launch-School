//lettercase percentage ratio ~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: String
Output: Object

- The output object will contain three percentages
  - % lowercase letters
  - % uppercase letters
  - % neither (assumed to be punctuation, spaces, and         numbers)
- The object can just be logged to the console, no need for interpolation

Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data:
string => number => object

Algorithm:
- make an upperCaseCount variable
- make a lowerCaseCount variable
- make a nonLetterCount variable

- make a percentages object
  - lowercase: "0.00",
  - uppercase: "0.00",
  - neither: "0.00"

- iterate over the string
  - if statement
    - if upper counter++
    - if lower counter++
    - if non counter++

- calculate percentage (part, string)
  - PERCENT_CONVERSION = 100;
  - make a total variable = string length
  - return (part / string) * PERC_CONV

- calculate percentage for each variable and save the result to the appropriate key in the object
*/

function letterPercentages(string) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let nonLetterCount = 0;

  let percentages = {};

  for (let idx = 0; idx < string.length; idx++) { //helper function?
    if ('A' <= string.charAt(idx) && string.charAt(idx) <= 'Z') {
      upperCaseCount += 1;
    } else if ('a' <= string.charAt(idx) && string.charAt(idx) <= 'z') {
      lowerCaseCount += 1;
    } else {
      nonLetterCount += 1;
    }
  }

  percentages['lowercase'] = calculatePercentage(lowerCaseCount, string);
  percentages['uppercase'] = calculatePercentage(upperCaseCount, string);
  percentages['neither'] = calculatePercentage(nonLetterCount, string);

  return percentages;
}

function calculatePercentage (part, string) {
  const CONVERT_PERCENT = 100;
  let total = string.length;
  return ((part / total) * CONVERT_PERCENT).toFixed(2);
}

console.log(letterPercentages('123'));

//triangle sides ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem
Input: three numbers
Output: string

- the output will by the type of triangle (equilateral, isosceles, scalene, or invalid)
- and invalid triangle is one that is not one of the types of triangles above
- every side must be greater than 0

Examples
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Data:
number => if statement => string

Algorithm:
- save the numbers into variables aSide, bSide, and cSide
- validate the trainge (helper function)
- if statement that checks for equilateral (helper function)
  - return string "equilateral"
- if statement that checks for iso (helper function)
  - return string "iso"
- if statement that checks for scalene (helper function)
  - return string "scalene"
*/

function triangle(aSide, bSide, cSide) {
  if (validateTriangle(aSide, bSide, cSide)) {
    if (isEquilateral(aSide, bSide, cSide)) return "equilateral";
    if (isIsosceles(aSide, bSide, cSide)) return "isosceles";
    if (isScalene(aSide, bSide, cSide)) return "scalene";
    else return "invalid";
  } else {
    return "invalid";
  }
}

function validateTriangle(aSide, bSide, cSide) {
  let perimeter = aSide + bSide + cSide;
  let longest = Math.max(aSide, bSide, cSide);
  let shortest = Math.min(aSide, bSide, cSide);
  let middle = perimeter - longest - shortest;

  return shortest > 0 && shortest + middle > longest;
}

function isEquilateral(aSide, bSide, cSide) {
  return (aSide === bSide && bSide === cSide);
}

function isIsosceles(aSide, bSide, cSide) {
  return (((aSide === bSide) && (aSide !== cSide)) ||
          ((bSide === cSide) && (bSide !== aSide)) ||
          ((cSide === aSide) && (cSide !== bSide)));
}

function isScalene(aSide, bSide, cSide) {
  return (aSide !== bSide && bSide !== cSide);
}

console.log(triangle(3, 4, 5));

//Tri-angles ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: 3 numbers
Output: string

- 3 numbers are the angles of a triangle
- assume integers & degrees
- output will be 'right', 'obtuse', 'acute', or 'invalid'

Examples:
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

Data:
numbers => check them => if statement => string output

Algorithm:
- check that the numbers make a valid triangle 
  - check for 0s (helper function)
  - check for = 180 (helper function)
  - if any of above, return 'invalid'
- Check for triangle type
  - if a, b, or c = 90, then return 'right'
  - if a, b, and c < 90, then return 'acute'
  - if a, b, or c >, then return 'obtuse'
*/

function triangle(sideA, sideB, sideC) {
  if (checkForZeros(sideA, sideB, sideC)) return 'invalid';
  if (checkFor180(sideA, sideB, sideC)) return 'invalid';
  if (sideA === 90 || sideB === 90 || sideC === 90) return 'right';
  if (sideA < 90 && sideB < 90 && sideC < 90) return 'acute';
  if (sideA > 90 || sideB > 90 || sideC > 90) return 'obtuse';
}

function checkForZeros(sideA, sideB, sideC) {
  return (sideA === 0 || sideB === 0 || sideC === 0);
}

function checkFor180(sideA, sideB, sideC) {
  return !((Number(sideA) + Number(sideB) + Number(sideC)) === 180);
}

//unlucky days ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//next feat num ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
input: number
output: number / string

- a featured number is a multiple of 7 and odd
- the highest featured number is 9876543201
- the output will be the next featured number after the integer that is input
- assume no negative numbers

Examples:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Data:
number => add 1 => check if featured => add 1 again or output answer

Algorithm:
- if input number is >= 9876543201 return error string
- set current number = input number + 1
- while the current number is not a featured number
  - add 1 to current number
- return current number

- check for current number
  - return boolean for
    - current number is odd
    - current number is divisible by 7
*/

function featured(num) {
  if (num >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }
  let currentNum = Number(num) + 1;
  while (!checkForFeature(currentNum)) {
    currentNum++;
  }
  return currentNum;
}

function checkForFeature(num) {
  return (num % 2 > 0) && (num % 7 === 0);
}

//sum square ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//10:18 & 10:38

/*
Problem
Input: number
Output: number

- the difference of the squared sum of numbers and the sum of all the numbers squared
- assume larger number - smaller number so answer is positive

Example:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

Data:
number => iterate (sum of numbers squared) => number2
number2 => save
number => iterate (sum of squared numbers) => number3

Number2 - number 3 (make this positive)

Algorithm:
inpnumber => sumOfNumSquared => number1
- save the input number as the counter
- sum of integers
- loop thorugh and add up each integer
  - sum += counter
  - counter--
- return sum * sum

inpnumber => sumOfSquarNum => number2
- save the input number as the counter
- sum of integers squared
- loop thorugh and square, then add up each integer
  - sum += (counter * counter)
  - counter--
- return sum 

num1, num2 => findDifference => answer
- return num1 - num2
*/

function sumOfNumSquared(inputNumber) {
  let counter = inputNumber;
  let sumOfIntegers = 0;

  while (counter > 0) {
    sumOfIntegers += counter;
    counter--;
  }
  return sumOfIntegers * sumOfIntegers;
}

function sumOfSquaredNum(inputNum) {
  let counter = inputNum;
  let sumSquared = 0;
  while (counter > 0) {
    let squaredCounter = counter * counter;
    sumSquared += squaredCounter;
    counter--;
  }
  return sumSquared;
}

function sumSquareDifference(inputNum) {
  let num1 = sumOfNumSquared(inputNum);
  let num2 = sumOfSquaredNum(inputNum);
  return num1 - num2;
}

//bubble sort ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//longest sentence ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

