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


//swap case ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//staggered caps 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//staggered caps 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//how long are you? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//search word 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//search word 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


