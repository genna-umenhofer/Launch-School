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


//Tri-angles ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//unlucky days ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//next feat num ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//sum square ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//bubble sort ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//longest sentence ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

