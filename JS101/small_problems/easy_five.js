//cute angles ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//combining arrays ~~~~~~~~~~~~~~~~~~~~~~~~ 23 mins
/*
PROBLEM:
- The input is two arrays
- The output is one array

- There are no duplicated values in the final array
- The elements are in ascending order?
- The elements are always integers?

ALGORITHM:
push each element in each array to a new array => sort the new array => filter the new array to remove dupicates => return the new array

array1, array2 => mergeArrays => array
- set an empty array
- push all of the elements in array1 to the new array
- push all of the elements of array2 to the new array
- return the new array

array => sortArray => array
- sort the new array from smallest to largest value

array => removeDuplicates => array
- compare each element to the next
- if === remove the second one
- if different, move on
- return the array
*/

function mergeArrays(array1, array2) {
  let newArray = [];
  array1.forEach(elem => newArray.push(elem));
  array2.forEach(elem => newArray.push(elem));
  return newArray;
}

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

function removeDuplicates(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] !== array[index + 1]) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

function union(array1, array2) {
  let mergedArray = mergeArrays(array1, array2);
  let sortedArray = sortArray(mergedArray);
  return removeDuplicates(sortedArray);
}

console.log(union([1, 3, 5], [3, 6, 9]));

//halvsies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 17 mins
/*
Problem:
- input is one array
- output is two arrays

- the output arrays will be the original array first half and second half
- if there is an odd number of elements, first half should get the extra element

Algorithm:
make a new array => find the length of the array => if even, arr1 is the front part from 0 to 1/2 length => if odd, arr1 is front part 0 to length  + 1 => arr2 is 1/2 length to end => push array halves to new array => return arrays

[1, 2, 3, 4]
 0  1  2  3

 [0, 1] [2, 3]

*/

function halvsies(arr) {
  let newArray = [];
  if (arr.length % 2 === 0) {
    let halfNumber = arr.length / 2;
    newArray.push(arr.slice(0, halfNumber));
  } else {
    let halfNumber = Math.floor((arr.length / 2) + 1);
    console.log(halfNumber);
    newArray.push(arr.slice(0, halfNumber));
  }
  newArray.push(arr.slice((arr.length / 2) + 1));
  return newArray
}

console.log(halvsies([1, 2, 3, 4, 5]));

//find the duplicate ~~~~~~~~~~~~~~~~~~~~~~~~~~ 18 mins
/*
Problem:
Input = array
Output = number

- unordered array
- exactly one value that is duplicated

Algorithm:
set a number to search for => iterate through array not includeing number =>
search for the number => if the number is duplicated save it to number to search
for => return number => if not duplicated increment the counter => continue
*/


function findDup(array) {
  let duplicate;
  for (let index = 0; index < array.length; index++) {
    let arrayPart = array.slice(index + 1);
    if (arrayPart.includes(array[index])) {
      duplicate = array[index];
      break;
    }
  }
  return duplicate;
}

console.log(findDup([1, 3, 1, 5]));

//combine two lists ~~~~~~~~~~~~~~~~~~~~~~~~ 5 mins
/*
Problem:
- Input is 2 arrays
- output is one array

- The array should alternate elements fromeach array

Algorithm:
make a new array => select first index of array 1 => push it to new array => select first index if a2 => push it => increment counter => repeat until done
*/

function interleave(arr1, arr2) {
  let newArr =[];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    newArr.push(arr1[idx]);
    newArr.push(arr2[idx]);
  }
  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']))


//multipl avg ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 6 mins
/*
Algorithm:
make a new number => for index multiply index by number => save result to number => repeat for all integers => divide number by lemgth of array => return result
*/

function multiplicativeAverage(array) {
  let average = array[0];
  for (let idx = 1; idx < array.length; idx += 1) {
    average = average * array[idx];
  }
  average = average / array.length;
  return average.toFixed(3);
}

console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));

//multiply lists ~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 mins
/*
make new array => multiply arr1[idx] with arr2[idx] => push result to new array => repeat for length of arr1 => return result array
*/

function multiplyList(arr1, arr2) {
  let newArr = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    newArr.push(arr1[idx] * arr2[idx]);
  }
  return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));

//list of digits~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2 mins
/*
split array => make each elem a digit again => return
*/

function digitList(num) {
  let array = String(num).split('');
  return array.map(num => Number(num));
}

console.log(digitList(12345));

//how many ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 14 mins
/*
Problem:
Input = array
Output = string & number

- input will be an array of different strings
- output will be each string and the number of times it appears within the array

Data:
array => object => log "key: value"

Algorithm:
- create an empty object
- iterate over the array
- if the current element is already a key increment the value by 1
- otherwise initiate the key with a value of 0 then increment by 1
- once iteration is complete, log the key value pairs to the console
*/

function countOccurrences(array) {
  let object = {};

  array.forEach(element => {
    if (Object.hasOwn(object, element)) {
      object[element] += 1;
    } else {
      object[element] = 0;
      object[element] += 1;
    }
  })

  listOccurrences(object);
}

function listOccurrences(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

//array average ~~~~~~~~~~~~~~~~~~~~~~~~~~ 2 mins
function average(array) {
  let average = array[0];
  for (let idx = 1; idx < array.length; idx += 1) {
    average = average + array[idx];
  }
  average = average / array.length;
  return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));


//after midnight 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//after midnight 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

