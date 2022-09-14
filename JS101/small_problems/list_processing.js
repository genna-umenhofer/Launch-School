//sum of digits ~~~~~~~~~~~~~~~~~~~~~~~~~~ 5 mins
/*
Algorithm:
- make the number a string
- split the number into individual digits
- add the digits together
- return the number
*/

function sum(num) {
  let total = String(num).split('').reduce((previous, current) => previous + Number(current), 0);
  return total;
}

console.log(sum(123456789));

//alphabetical nums ~~~~~~~~~~~~~~~~~~~~~~~~~~~ 10 mins
/*
Problem:
Input: array
Output: array

- Arrays will both be integers
- Output will be alphabetically sorted based on the english word for the number
- example: eight, eleven, fifteen, four...

Algorithm:
- iterate through the array
- sort the array
  - declare a constant that includes all the words of each number
  - compare the first number word to the second number word
  - return the first number alphabetically
- return the sorted array
*/

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphaNumberSort(array) {
  return [...array].sort((a, b) => wordSort(a, b));
}

console.log(alphaNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8]));

//multiply pairs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 9 mins
/*
Problem:
Input: two arrays
Output: one array

- Output array is the products of all combinations of array 1 and array 2
- No arrays will be empty
- Output array should be sorted in ascending numerical order

Algorithm:
- declare and empty array
- iterate through array 1
  - for each number
    - iterate through array 2
    - multiply the numbers
    - push the number to the empty array
- return the sorted empty array
*/

function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(num1 => {
    array2.forEach(num2 => {
      products.push(num1 * num2);
    });
  });
  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));

//leading substr ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 11 mins redo
/*
Problem:
Input: string
Output: array

- array will have all substrings of the string
- each substring starts with the first letter of the word
- output should be ordered from shortest to longest

Algorithm:
- declare a new array
- declare a counter
- iterate through the word
  - push the substring that is from 0 to counter
  - increment the counter
- return the array sorted by length
*/

function wordSort(word1, word2) {
  if (word1.length > word2.length) {
    return 1;
  } else if (word1.length < word2.length) {
    return -1;
  } else {
    return 0;
  }
}

function leadingSubstrings(string) {
  let results = [];
  let counter = 1;
  let stringArray = string.split('');
  stringArray.forEach(letter => {
    results.push(stringArray.slice(0, counter).join(''));
    counter++;
  });
  return results.sort((word1, word2) => wordSort(word1, word2));
}

console.log(leadingSubstrings('abc'));


//all substr ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ redo
function wordSort(word1, word2) {
  if (word1.length > word2.length) {
    return 1;
  } else if (word1.length < word2.length) {
    return -1;
  } else {
    return 0;
  }
}

function leadingSubstrings(string) {
  let results = [];
  let start = 0;
  let stringArray = string.split('');
  while (start < string.length) {
    stringArray.forEach(letter => {
      results.push(stringArray.slice(start).join(''));
    });
    start++;
  }
  return results;
}

console.log(leadingSubstrings('abcde'));




//palindrom substr ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ redo
/*
Problem:
Input: string
Output: array

- substrings in output are all palindromic
- sorted by order of appearance
- use the substrings function from the previous problem
- punctuation and capitalization matter
- single characters are not palindromes

Algorithm:
- get all of the palindromes using the fuction from the previous problem
- iterate through the arrray
  - filter out the single letters
  - filter out any wsubstring that is not the same forward and backward
    - reverse the substring
    - sompare the reverse to the forward
- return the array
*/

function wordSort(word1, word2) {
  if (word1.length > word2.length) {
    return 1;
  } else if (word1.length < word2.length) {
    return -1;
  } else {
    return 0;
  }
}

function leadingSubstrings(string) {
  let results = [];
  let stringArray = string.split('');
  stringArray.forEach(letter => {
    for (let start = 0; start < string.length; start++) {
      results.push(stringArray.slice(start).join(''));
    }
  })

  return results;
}

//console.log(leadingSubstrings('madam'));


function palindromes(word) {
  let substringList = leadingSubstrings(word);
  console.log('sunstringList is: ' + substringList);
  let singlesOut = substringList.filter(word => removeSingles(word));
  console.log('singlesOut is: ' + singlesOut);
  let nonPalindromesOut = singlesOut.filter(word => removeNonPalindromes(word));
  console.log('nonPals is: ' + nonPalindromesOut);
  return nonPalindromesOut;
}

function removeSingles(word) {
  if (word.length >= 2) {
    return word;
  }
}

function removeNonPalindromes(word) {
  let reverseWord = word.split('').reverse().join('');
  console.log('Reverseword is: ' + reverseWord);
  if (reverseWord === word) {
    return word;
  }
}

console.log(palindromes('madam'));


//sum of sums ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ redo
/*
Problem:
Input: array
Output: number

- number is the sum of each leading subsequence
- array always contains a number

Algorithm:
- save the first number
- add th efirst number to the second number
- save the sum
- add the third number
- save the sum .... continue until out of numbers
- return the sum
*/

function sumOfSums(num) {
  let sumTotal = 0;
  for (let index = 1; index <= num.length; index++) {
    sumTotal += num.slice(0, index).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

console.log(sumOfSums([3, 5, 2]));

//grocery list ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//inventory item transact ~~~~~~~~~~~~~~~~~~~~~~~~~


//inventory item avail ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

