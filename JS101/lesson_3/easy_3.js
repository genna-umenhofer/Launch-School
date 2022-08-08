// Question 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let numbers = [1, 2, 3, 4];

function remove1(array) {
  return array.splice();
}
console.log(remove1(numbers));

function remove2(array) {
  return array.filter(index => index[0]);
}
console.log(remove2(numbers));

function remove3(array) {
  while (array.length > 0) {
    array.pop();
  }
}
console.log(remove3(numbers));

//LS Answer:
numbers.length = 0;

// Question 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
JS can't concatenate two arrays, so they are first coerced to
strings and then concatenated. In this case, the 3 and 4 don't
have any characters separating them. so the output looks like
1,2,34,5.
*/

// Question 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Strings are pass-by-value since they are primitive data types.
The str1 will still have a value of "hello there" but str2 will
be "goodbye!"
*/

// Question 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
The .slice() method makes a copy of an existing array. The copy
is then altered so that arr2[0].first has a new value of 42. I
think that the arr1 will be changed, since slice() makes a
shallow copy of the array before we mutate it. Shallow copies
still point to the original instances of nested objects and
arrays.
*/

// Question 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function altIsColorValid(color) {
  return color === "blue" || color === "green";
}
altIsColorValid("blue");

// Launch School Answers:
const isColorValid = color => color === "blue" || color === "green";
isColorValid("blue");
const isColorValid1 = color => ["blue", "green"].includes(color);
isColorValid1("blue");