//upper case check ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: string
Output: boolean

- true if all alphabetic chars are uppercase
- false otherwise
- ignore non alphas

Algorithm:
- return string capitalzied compared to regular string
*/

function isUppercase(string) {
  return string.toUpperCase() === string;
}

console.log(isUppercase('T'));

//delete vowels ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: array
Output; array

- Output has vowels removed

Algorithm:
- initiate a vowel variable
- new array
- loop through the array
  - new string
  - loop through the string
    - if the current letter is not in the vowel variable
    - push the letter to the new string
  - push the new string to the new array
- return the new array
*/

function removeVowels(array) {
  const vowels = 'aeiouAEIOU';
  let newArray = [];
  for (let idx = 0; idx < array.length; idx++) {
    let newString = '';
    for (let letter = 0; letter < array[idx].length; letter++) {
      if (!(vowels.includes(array[idx][letter]))) {
        newString = newString.concat(array[idx][letter]);
      }
    }
    newArray.push(newString);
  }
  return newArray;
}

console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));

//lettercase counter ~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Prob
Input: string
Output: object

- number of lowercase count
- number of uppercase count
- neither upper nor lower count

Algorithm
- initialize a new object
- loop => count lower
  - iterate through string
  - if letter is lower case update object
- loop => count upper
  - iterate
  - if upper update object
- loop => count other
  - iterate
  - if none update object
- return object
*/

function letterCaseCount(string) {
  let letterCountObject = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === string[idx].toLowerCase()) {
      letterCountObject['lowercase'] += 1;
    } else if (string[idx] === string[idx].toUpperCase()) {
      letterCountObject['uppercase'] += 1;
    } else {
      letterCountObject['neither'] += 1;
    }
  }

  return letterCountObject;
}

console.log(letterCaseCount('abCdef 123'));

//capitalize words ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Problem
Input: string
Output: string

-Each word should be capitalized
-Words are separated by spaces
-all ofther letters should be lowercase

Algorithm:
- initialize a new string variable
- initialize a new array variable that is the string
split into words at each space
- iterate ofer the array
  - split off the first letter, capitalize it, and join it back together
  - push it to the new string
- return the new string
*/

function wordCap(sentence) {
  let newSentence = '';
  let sentenceArray = sentence.split(' ');
  for (let idx = 0; idx < sentenceArray.length; idx++) {
    let currentWord = sentenceArray[idx];
    let capitalizedWord = currentWord.substring(0, 1).toUpperCase() + currentWord.substring(1) + ' ';
    newSentence = newSentence.concat(capitalizedWord);
  }
  return newSentence;
}

console.log(wordCap('four score and seven'));

//swap case ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: string
Output: string

- if capital, return lowercase
- if lowercase, return capital

Algorithm:
- split word into an array
- initialize a new array
- iterate through the array
  - if capitalized letter === letter
    - push lowercase letter
  - elseif lowercase letter === letter
    - push upper case letter
- return joined array
*/

function swapCase(string) {
  let wordArray = string.split('');
  let newSentence = [];
  wordArray.forEach(letter => {
    if (letter === letter.toUpperCase()) {
      newSentence.push(letter.toLowerCase());
    } else if (letter === letter.toLowerCase()) {
      newSentence.push(letter.toUpperCase());
    } else {
      newSentence.push(letter);
    }
  });
  return newSentence.join('');
}

console.log(swapCase('CamelCase'));

//staggered caps 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Problem:
Input: String
Output: String

- input will be a mix of upper and lowercase
- output will be alternating case
- non-alphabetic characters should stay the same, but count for when to
switch case

Algorithm:
- make all the letters lower case
- make every other letter uppercase

- make a new array
- make the string lowercase
- make the string an array
- iterate over the array
- if odd push to new array
- if even make uppercase before pushing to new array
- return the new array
*/

function staggeredCase(string) {
  let newArray = [];
  let stringArray = string.toLowerCase().split('');
  for (let idx = 0; idx < stringArray.length; idx++) {
    if (idx % 2 === 0) {
      newArray.push(stringArray[idx].toUpperCase());
    } else if (idx % 2 !== 0) {
      newArray.push(stringArray[idx]);
    }
  }
  return newArray.join('');
}

console.log(staggeredCase('I Love Launch School!'));

//staggered caps 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function staggeredCase2(string) {
  let newArray = [];
  let stringArray = string.toLowerCase().split('');
  let needUpper = true;

  for (let idx = 0; idx < stringArray.length; idx++) {
    if (stringArray[idx] >= 'a' && stringArray[idx] <= 'z') {
      if (needUpper) {
        needUpper = false;
        newArray.push(stringArray[idx].toUpperCase());
      } else {
        needUpper = true;
        newArray.push(stringArray[idx]);
      }
    } else {
      newArray.push(stringArray[idx]);
    }

  }
  return newArray.join('');
}

console.log(staggeredCase2('I Love Launch School!'));

//how long are you? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* Problem
input: string
output: array

- array is all of the words separated into elements
- each word has the length of the word and a space concatenated
- punctionation counts as part of the word that preceeds it

- assume words are separated by spaces

Examples:
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

Data:
string => array of words => iterate over array => transform elements => return array

Algorithm:
- guard clause to check that length of string is not 0
  - if it is, return []
- save a new array equal to
  - save the input string as an array of words
  - iterate over the array of words
    - return the concatenation of the word and letter count with a space            between to the new array
- return the new transformed array of words

*/

function wordLengths(string) {
  if (string.length === 0) return [];
  let resultArray = string.split(' ').map(word => {
    return word + ' ' + word.length;
  })
  return resultArray;
}

console.log(wordLengths(''));

//search word 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Algorithm
- break the text into an array
- count initialized to 0
- iterate over the array 
  - if word is exactly equal to the array[idx]
    - count++
- return count
*/

function searchWord(word, text) {
  let textArray = text.toLowerCase().split(' ');
  let count = 0;
  textArray.forEach(item => {
    if (item === word) {
      count++;
    }
  });
  return count;
}

//search word 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function searchWord2(word, text) {
  let textArray = text.toLowerCase().split(' ');
  textArray.forEach((item, index) => {
    if (item === word) {
      textArray[index] = '**' + word.toUpperCase() + '**';
    }
  });
  return textArray.join(' ');
}

