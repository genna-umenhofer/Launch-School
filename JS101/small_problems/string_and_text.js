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


//staggered caps 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//how long are you? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//search word 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//search word 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


