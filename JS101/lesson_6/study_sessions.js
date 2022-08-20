// Higher-order vs first-class 
// PEDAC structure

// First-class functions are functions that can be used as values. 
// Higher-order functions are functions that accept a function as an argument and/or return a function.

sayHello();

function sayHello() {
  console.log(`Say hello`);
}


let sayHi = sayHello; // identifiers that reference the same object.
sayHi();


// This guy is a function object assigned to the `goodbye` identifier, which is further referenced by the `sayGoodbye` varible. 
let sayGoodbye = function goodbye() {
  console.log('goodbye');
};

if (sayGoodbye) {
  // sayGoodbye();
}

// Higher-order function is a classification given to a function definition if that function either: 
// - Expects a function as an argument
// - Returns a function from itself
// - Does both. 

function printMessage(func) {
  func();
  return function nonsense() {
    console.log(5);
  }
}

let nonsense = printMessage(sayGoodbye);
nonsense();

// What does this code print and why. 

// this code snippet will first log the message `'goodbye'` to the console, and on the next line it will log the value `5` to the console. 

// The `printMessage` function accepts a function as an argument, invokes that function and returns a new function from itself. The function that we pass is called `sayGoodby`, which will log the message `'goodbye'` to the console. 

// so, when we invoke `printMessage` on `line 39`, the invocation of the `sayGoodbye` function on `line 33` will first log the message `'goodbye'` to the console. 

// The new function that is returned from the invocation of `printMessage` on `line 39` is stored in a new variable called `nonsense`. On `line 40`, we invoke `nonsense`, which will log the value `5` to the console. 


// What will this code output and why.
// What are the core concepts being addressed in this problem? 
// Scope (in that global variables can be accessed from within nested scopes) 
// Strings are immutable (string method will return new strings that must be stored in a variable)
let message = "Everybody ";

function appendMessage(appended) {
  message.concat(appended);
  console.log(`${message}`);
}

appendMessage('dance!');

/*
let message = "Everybody "; 

function appendMessage(appended) { //appended = 'dance!'
  message.concat(appended); // takes message 'everybody' and puts it together with 'dance!' = concat returns new string
  console.log(`${message}`); //Will it output 'Everybody dance!' or 'Everybody '? message will be whole string
}

appendMessage('dance!'); //takes string 'dance!'
*/

// This code will output the string 'Everybody dance!' which is a concatenation of two strings.

// First, the message variable is declared on `line 54` to the value of a string literal 'Everybody '
//On line 61 the function appendMessage is invoked with the argument of 'dance!'
// dance is passed as the value for the parameter appended into the sppendMessage function that is defined on line 56
//The two strings are concatenated with the method .concat which returns a new string
//The new sting is output using console.log()



// the code outputs the message "Everybody".

// we call appendMessage and passed 'dance!' string as an argument.
// inside the function, the message variable concatenated with message become "Everybody dance!".
// but since the message variable has a primitive value, the concatenated message is not affected to the message variable declared on global variable.

// thus when we log the console.log passed message Everybody is outputted.

/*
  The code outputs the message `"Everybody"`. 

  We call `appendMessage` [function on `line 64`] and passed [it the string value] `'dance!` as an argument. 
  
  Inside the function on `line 60`, we invoke the `concat` string method on the `message` global variable, which contains a primitive string value '`Everybody'`. The `concat` string method returns a new string rather than mutating the string it was invoked on. In this casse, that new string is not captured and the value of `message` is not changed. 

  On `line 61`, we are logging the vlaue of `message` to the console, which is still just the string `'Everybody'`. 
*/

// - Structure/flow and formatting. 
// - Identifying what parts of your answer are acutally relevant to the question. 
// My approach for taking written exams: 
//  - I will look though and find all of the hightest-point value questions and answer  those first. Then I will move up the exam from the bottom and answer the successively smaller problems. 


// - Core concept: variable shadowing. 
// - detail 1
// - detail 2

/*
  PROBLEM
    (first I will identify and create a statement about my input)
    (I will identify and create a statement about my output)
    (I will make one statement for every explicit requirement)
    (I will make one statement for every implicit requirement)
*/

/*

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 

*/

//~~~~~~~~~~~~~ Adv PEDAC
/*
Understanding the [P]roblem
  - Input: 
    - `num`, `s` -> numbers, numbers > 0
  - Output:
    - array, with a length of s
    - "Not valid"
  - Rules:
    - `s` is the length / stopping point
    - `num` itself is included in the array if it's a palindrome
    - if `num` or `s` is not a number >= 0, then return "Not valid"
    - palindrome:
      - has to be at least 2 digits
      - is number that reads the same backwards and forwards
    - if `s` is 0, then return an empty array []
    - if `num` is palindrome, and `s` is 0, then return an empty array []
    - string of numbers is not a number

[E]xamples and Test Cases

[D]ata Structure
num = 6, count = 4

6 => []      [11, 22, 33] <= [11, 22, 33, 44]

=> [11, 22, 33, 44]
=> length = count

--

num = 75, count = 1

75 => [] => [77]
75 => [77]

101 => [] => [101] => [101, 111]

[A]lgorithm

*/

console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"

//initialize a variable to hold an empty array
//initialize a variable to hold the current number to start at (make it into an array)
//initialize a variable to hold the counter
//check to see if the current number is a palindrome by comparing the current number array is the same order forwards and backwards
//if the current number is a palindrome
//convert it back into a number
//save the number to the empty array
//Otherwise
//increment the current number by one
//check again
//check to see if length has been reached
//if length has been reached
//return the new array