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

//always return neg ~~~~~~~~~~~~~~~~~~~~~~~~~ 4 mins
/* 
PROBLEM:
- input is a number
- output is a number that is negative

ALGORITHM:
take the absolute value of the number => multiply it by -1 => return the number
*/

function negative(num) {
  return Math.abs(num) * -1;
}

console.log(negative(-1));

//count up ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 mins
/* 
PROBLEM:
- The input is a number
- The output is an array

- array elements are 1 through whatever the number is (inclusive)

ALGORITHM:
set a counter = num => set a new array => push the counter value to the array => decrement the counter => repeat until counter is 0 => return array
*/

function sequence(num) {
  let array = [];
  for (let counter = num; counter > 0; counter--) {
    array.push(counter);
  }
  return array.reverse();
}

console.log(sequence(5));


//name swap ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 mins
/*
PROB:
- The input is string
- The output is string

- input is always FIRST SPACE LAST
- output is always LAST COMMA SPACE FIRST

ALGO:
split the string into two variables, first and last => return a string of appended strings joined by a comma and space
*/

function swapName(name) {
  let fullName = name.split(' ');
  let firstName = fullName[0];
  let lastName = fullName[1];
  return lastName + ', ' + firstName;
}

console.log(swapName('Joe Roberts'));


//sequence count ~~~~~~~~~~~~~~~~~~~~~~~~~~ 10 mins
/* 
PROB:
- The input is two integers
- The output is an array

- first arg is the count
- second arg is the starting num
- array has same number of elements as count
- value of element is a multiple of starting num
- if starting num is 0, return empty array

ALGO:
check if starting num is 0 => return empty array if it is

set an empty array => set a counter equal to 1 => multiply the starting num by counter => push result to array => do this until counter is >= starting num => return array
*/

function sequence(count, startingNum) {
  if (Number(startingNum) === 0) return [];

  let resultArray = [];

  for (let counter = 1; counter <= count; counter++) {
    resultArray.push(startingNum * counter);
  }

  return resultArray;
}

console.log(sequence(5, 1));

//reverse it 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 mins
/*
PROB:
- The input is a string
- The output is a string

- The output is the words reversed order as a sentence

ALGO:
split the string at each word => reverse the array => join the elements of the array => return the string
*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence('Reverse these words'));

//reverse it 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 8 mins
/*
Problem:
- The input is a string
- The output is a string

- If the word is longer than or exactly 5 letters, reverse it
- If the word is shorter than 5 letters keep it the same

Algo:
split the string into words => if the word length is >= 5 reverse it => otherwise, keep it => return new string

map(word => {
  if >= 5 return reverseIt(word)
  else return 
})

word => reverseIt => drow
- split string, reverse, join
- return it
*/

function reverseWords(string) {
  let splitSentence = string.split(' ');
  let reversedSentence = splitSentence.map(word => {
    if (word.length >= 5) {
      return reverseIt(word);
    } else {
      return word;
    }
  });
  return reversedSentence.join(' ');
}

function reverseIt(word) {
  return word.split('').reverse().join('');
}

console.log(reverseWords('Walk around the block'));

//reversed arrays ~~~~~~~~~~~~~~~~~~~~~~~~~~ 20 mins
/*
PROB:
- the input is an array
- the output is an array

- the output array should be the reverse order of the input array
- no using hte reverse method
- should mutate the array

[1, 2, 3, 4] length = 4
[4, 1, 2, 3] length = 4

ALGO: (did not work)
set a counter = array length => select the last element in the array using the counter as an index => push that to the front of the array => decrement the counter => repeat until counter reaches 0 => return array

ALGO: 
make a copy of the array => make a counter => for each element of the original array, make is equal to the counter, starting at the end of the original array => increment the counter => loop through the whole array = > return the array
*/

function reverseArray(array) {
  let arrayCopy = array.slice();
  let copyCounter = 0;
  for (let counter = (array.length - 1); counter >= 0; counter--) {
    array[counter] = arrayCopy[copyCounter];
    copyCounter++;
  }
  return array;
}

console.log(reverseArray([1, 2, 3, 4]));

//matching parentheses ~~~~~~~~~~~~~~~~~~~~~~~~~~ 10 mins
/*
Algorithm:
- initialize a counter
- loop through the string
  - if the current character is (
    - add one to the counter
  - else if the current character is )
    - subtract one from the counter
  -CHECK that the counter is not less than 0
    - return false if it is
- return true if the counter is 0
*/

function isBalanced(string) {
  let counter = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      counter += 1;
    } else if (string[index] === ')') {
      counter -= 1;
    }
    if (counter < 0) return false;
  }
  return counter === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
