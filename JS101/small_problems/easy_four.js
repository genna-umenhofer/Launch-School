//how old is teddy ~~~~~~~~~~~~~~~~~~~~~~~~ 14 mins
/* 
PROMBLEM:
- Input none - just the function will be called and do the thing
- Output a string with a randomly generated integer

- The integer will be rounded to no decimal places
- Integer must be between 20 and 120 (inclusive)

ALGORITHM:
generate a random number between 20 and 100 => round the number => print the string with number interpolated

min, max => generateAge => integer
- set a minimum to 20
- set a maximum to 120
- generate random number between min and max
- return number

integer => printAge => interpolated string
- save the integer to a variable
- save the sentence to a variable
- print the sentence variable

*/

function printAge(num) {
  let age = num;
  let sentence = `Teddy is ${age} years old.`;
  return sentence;
}

function generateAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function howOldIsTeddy(min, max) {
  let teddyAge = generateAge(min, max);
  console.log(printAge(teddyAge));
}

howOldIsTeddy(20, 120);

//searching 101 ~~~~~~~~~~~~~~~~~~~~~~~~~~ 21 mins
/*
PROBLEM:
- The input is 6 numbers (from the user)
- The output is a sentence that says if the 6th number is included in the first 5

- The sentence includes all the numbers

ALGORITHM:
get the user input for each number => save the first five to an array => see if the array includes the 6th number => output a sentence

none => getUserInput => [num1, num2, num3, num4, num5, num6]
- initialize empty array
- ask user for 1st number
- save to variable
- push to array
- repeat for other numbers
- output the array

[num1, num2, num3, num4, num5, num6] => doesInclude => boolean
- save the first five numbers to a variable
- save the last number to a variable
- compare the first five to the sixth
- return true if it is included or false if not

boolean, [num1, num2, num3, num4, num5, num6] => printResult => interpolated string
- if true return interpolated string for is included
- if false return interpolated string for is not included

*/

const userNumbers = ['25', '15', '20', '16', '23', '17']; //getUserInput();

function doesInclude(array) {
  let numbersToCheck = array.slice(0, (array.length - 1));
  let numLookingFor = String(array.slice().pop());

  return !!numbersToCheck.find(element => element === numLookingFor);
}

function printResult(bool, array) {
  let numbersToCheck = array.slice(0, (array.length - 1)).join(', ');
  let numLookingFor = String(array.slice().pop());

  if (bool) {
    return `The number ${numLookingFor} is in ${numbersToCheck}.`
  } else {
    return `The number ${numLookingFor} is not in ${numbersToCheck}.`
  }
}

console.log(printResult(doesInclude(userNumbers), userNumbers));


//when will I retire ~~~~~~~~~~~~~~~~~~~~~~~~~ 14 mins
/*
PROBLEM:
- The input is the user's age & age at retirement
- The output is a string that shows how many years until retirement

- The output shows the current year
- The output shows the year the person will retire
- The years to retire is the difference between the age of retirement and current age
- The year of retirement is the diffrence plus the year to retire

ALGORITHM:
subtract the user's current age from the retirement age => add the age to the current year => output the sentence

currentAge, retirementAge => findYearsToRetire => yearsLeft
- return retirementAge - currentAge

yearsLeft, currentYear => findRetirementYear => retireYear
- return currentYear + yearsLeft

currentYear, currentAge, retirementAge => retirementMessage => interpolated string
- set findYearsToRetire to a variable
- set firndRetirementYear to a variable
- return interpolated string
*/

function findYearsToRetire(currentAge, retirementAge) {
  return retirementAge - currentAge;
}

function findRetirementYear(yearsLeft, currentYear) {
  return Number(currentYear) + Number(yearsLeft);
}

function retirementMessage(currentYear, currentAge, retirementAge) {
  let yearsLeft = findYearsToRetire(currentAge, retirementAge);
  let retirementYear = findRetirementYear(yearsLeft, currentYear);
  return `It's ${currentYear}. You will retire in ${retirementYear}. You have only ${yearsLeft} years of work to go!`;
}

console.log(retirementMessage(2017, 30, 70));

//palindrome 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 18 mins
/*
PROBLEM:
- The input is a string
- The output is a boolean

- A palindrome is a string that has the same oreder of letters forward and backward
- Case matters
- characters matter

ALGORITHM:
take the string and break it into letters => reverse the letters => compare the two strings at each letter => output boolean 

string => reverseTheString => array
- make the string into an array
- reverse the array
- put the array back into a string
- output the string

string1, string2 => compareStrings => boolean
- for each letter of each string, see if they are ===
- if they are equal, return true
- if they are not equal, return false
*/

function reverseTheString(string) {
  return string.split('').reverse().join('');
}

function compareStrings(string1, string2) {
  while (true) {
    for (let idx = 0; idx < string1.length; idx += 1) {
      return string1[idx] === string2[idx];
    }
  }
}

function isPalindrome(string) {
  let string1 = string;
  let string2 = reverseTheString(string);
  return compareStrings(string1, string2);
}

console.log(isPalindrome('1221'));

//palindrome 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2 mins
function isPalindrome2(string) {
  let string1 = string.toLowerCase();
  let string2 = reverseTheString(string).toLowerCase();
  return compareStrings(string1, string2);
}

//see code from palindrome 1

//palindrome numbers ~~~~~~~~~~~~~~~~~~~~~~~~~~


//running totals ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//letter counter 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//letter counter 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//letter swap ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

