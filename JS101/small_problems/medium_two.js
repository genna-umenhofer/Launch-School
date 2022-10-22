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


//unlucky days ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//next feat num ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//sum square ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//bubble sort ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//longest sentence ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

