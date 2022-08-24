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

//halvsies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//find the duplicate ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//combine two lists ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//multipl avg ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//multiply lists ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//list of digits~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//how many ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//array average ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//after midnight 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//after midnight 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

