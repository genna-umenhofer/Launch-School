/*
// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

Problem:
Input: array
Output: array

- the output array should be the same length of the original array
- each element of the new array should be the count of the number of elements smaller that the number in that array position
- the count should exclude the same numbers

Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

Data:
- starting with an array
- ending with an array

Algorithm:
array => smallerNumbersThanCurrent() => array
- sort the original array without mutating it and remove the duplicates (helper)
- initialize a results array
- iterate over the unsorted array
  - let count = 0
  - iterate over the sorted array
    - if the current number is less than the unsorted current number
      - count++
  - push the count to the new array
- return the results array

array => sortAndRemoveDups() => array
- sort the array from smallest to largest number
- filter out the duplicate numbers
- return the array
*/

function smallerNumbersThanCurrent(array) {
  let sortedAndFilteredArray = sortAndRemoveDups(array);
  let results = [];
  for (let origIdx = 0; origIdx <= array.length; origIdx++) {
    let count = 0;
    let currentNum = array[origIdx];
    sortedAndFilteredArray.forEach(num => {
      if (num < currentNum) {
        count++;
      }
    });
    results.push(count);
  }
  return results.slice(0, (results.length - 1));
}

function sortAndRemoveDups(array) {
  return array.slice(0)
              .sort(function(a, b){return a-b})
              .filter((number, idx, arr) => number !== arr[idx + 1]);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

Problem:
input: array
output: number

Examples:
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

Data:
- array / nested array

Algorithm:

- make a list of all the possible consecutive sets of integers
array => listOfIntegerSets() => nested array
  - make a new array
  - iterate over the input array, for each element
    - make another new array
    - iterate over the input array, starting at the element and ending after 5 elements
      - push the element to the new array
    - push the new array to the other new array
  - return the new array

- make a list of all the sums of the sets
nested array => findSums => array
  - make a new array
  - iterate over the nested array
    - make a results variable
    - for each inner array
      - add the element to the results variable
    - push the result to the new array
  - return the new array

- return the smallest of the sums
array => findSmallest => number
  - return the smalles number in the list



*****
*/

function minimumSum(array) {
  if (array.length < 5) return null;
  return findSmallest(findSums(listOfIntegers(array)));
}

function findSmallest(array) {
  return Math.min(...array);
}

function findSums(array) {
  let listOfSums = [];
  for (let idx1 = 0; idx1 <= array.length - 1; idx1++) {
    let result = 0;
    for (let idx2 = 0; idx2 <= 4; idx2++) {
      result += array[idx1][idx2];
    }
    listOfSums.push(result);
  }
  return listOfSums;
}

function listOfIntegers(array) {
  let nestedResultArray = [];
  for (let idx = 0; idx <= (array.length - 5); idx++) {
    let resultArray = [];
    for (let counter = 0; counter <= 4; counter++) {
      let elemToPush = Number(idx) + Number(counter);
      resultArray.push(array[elemToPush]);
    }
    nestedResultArray.push(resultArray);
  }
  return nestedResultArray;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

