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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//STUDY SESSION 10/22/22 JS 109 Written

// What are the differences between a function delcration, a function expression and an arrow function? You can use examples as part of your answer. 

// A function declaration is when you create a functino using the function keyword
function sayHello(greeting) {
  console.log(greeting);
}

// A function expression is when you declare a function, but the first word is not the function keyword. For example, saving a function as the assignment to a variable.
let sayHello2 = function() {
  console.log('Hello');
}

(function sayHello() {
  console.log("hello");
});

//An arrow function is a way to write a function that uses "fat arrow notation" and can be used to create anonymous functions, or functions within a method.
let names = ['3', '4'];
names.map(function (elem) { sayHello(elem) });

// This will only happen for a limited number of JavaScript's constructors.
// JavaScript is instantiating a new Number from the constructor and the array element. 
names.map(Number);

// Arrow functions are function expressions that are always anonymous. They are created with the "fat arrow notation" and can be used like any other function object. 

let newFunc = (arrIn, strIn) => {
  console.log(arrIn);
  console.log(strIn);
}

// Whenever we need a callback for one of the object or array methods; we can use any function object. We can use any of the function definition options when creating a callback, not just an arrow function. 

// --------------------------------------------
//  Write out an explanation that covers the differences between a first-class function and a higher-order function. 

/*
A higher-order function is a function which can be passed another function. A first-class function is a function that can be assigned to a variable, passed to another function, or returned from a function.
*/

// A first-class function is a function that can be used anywhere JavaScript expects a value. All functions in JavaScript are firt-class vlaues. 
// A higher-order function is a function that does one or more of: 
//  - Take another function as an argument. 
//  - Return another function explicitly. 


// ------------------------------------------
// Write a definition for what a side-effect is and give me two examples of one. 


// A side effect is when a function has an unintended consequence, such as a return value, or logging something to the console, in addition to the intendend effect of the function. For example, the .forEach() method always returns 'undefined' but this is usually not the intended outcome of using this method. Typically this method is used to iterate over an array to execute a code block for each item in the array. Usually that execution does not intend to use the return vaule of "undefined. " That makes the return value a side effect. A second example is logging a value to the console before returning an intended value from a function. 

// The terminology they like to use regarding side effects is as a description of a behavior that a function invocation exhibits. 
// Reassigns a non-local variable.
// Mutates the value of any object referenced by a non-local variable. 
// Reads from/writes to a file, network connection, browser or the system hardware. 
// Raises an exception without handling it. 
// Calls another function that has side effects (exhibits side effects).


// -------------------------------------------
// Write out a description of what this code will do and why.  
let num = 3;

if (num = 0) {
  console.log(num);
}

// This code will output the number `3` to the console

// We first declare the variable `num`  and initialize it to `0` on `line 1`. 
// We then evaluate an `if statement` whose conditional checks the result of a reassignment (of `num` to the value `3`). Reassignments are expressions, and so JavaScript will evaluate this expression before making the check. Because reassignments evaluate to the new value, this `num = 3` expression will evaluate to `3` - which is a truthy value. Therefore the conditional expression will evaluate to true and `line 4` will log `3`. 