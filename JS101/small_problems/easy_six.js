//double char 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~ 5 mins
/*
Problem:
- The input is a string
- The output is a string with every char doubled

- case matters
- punctuation matters

Algorithm:
make an array from the string => return an array with each char doubled in each string element => join the array => return the string
*/

function repeater(string) {
  let splitString = string.split('');
  let doubledStrings = splitString.map(elem => elem = elem + elem);
  return doubledStrings.join('');
}

console.log(repeater('Good job!'));

//double char 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 7 mins
/* 
PROBLEM:
- The input is a string
- The output is a string with consonants only doubled

Algorithm:
split the string => iterate over the array => if the elem is a consonant, double it => otherwise, 
*/

function doubleConsonants(string) {
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWYXZ';
  let splitString = string.split('');
  let doubledStrings = splitString.map(elem => {
    if (consonants.includes(elem)) {
      return elem = elem + elem;
    } else {
      return elem;
    }
  });
  return doubledStrings.join('');
}

console.log(doubleConsonants('Good job! #1'));


//reverse number ~~~~~~~~~~~~~~~~~~~~~~~~~~ 11 mins
/*
PROBLEM:
-The input is a number
-THe output is a number

-reverse order of digits
-leading zeros dropped

ALGO:
make number a string => split the number into an array => reverse the array => make eahc element a number => join the array => return joined array
*/

function reverseNumber(num) {
  let array = String(num).split('');
  let reversedArray = array.reverse();
  return Number(reversedArray.join(''));
}

console.log(reverseNumber(1200));

//get middle char ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 9 mins
/*
Prob:
-Input is a string
-output is a string

- odd length = one letter
= even length = two letters

ALGO:
find length of string => if odd, return letter at index length / 2 => if even, round length /2 => return concat of index -1 and +1 of half length 
*/

function centerOf(string) {
  if (string.length === 1) return string;
  let halfOfString = Math.floor(string.length / 2) - 1;
  if (string.length % 2 !== 0) {
    return string[halfOfString + 1];
  } else {
    return string[halfOfString] + string[halfOfString + 1];
  }
}

console.log(centerOf('LaunchSchool'));

//always return neg ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//count up ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//name swap ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//sequence count ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//reverse it 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//reverse it 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//reversed arrays ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//matching parentheses ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

