// welcome stranger ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function greetings(arr, obj) {
  let firstName = arr[0];
  let middleInitial = arr[1];
  let lastName = arr[2];
  let jobTitle = Object.values(obj)[0];
  let jobType = Object.values(obj)[1];
  console.log(`Hello ${firstName} ${middleInitial} ${lastName}! Nice to have a ${jobTitle} ${jobType} around.`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

//LS Answer:
function greetings1(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${status["occupation"]} around.`;
}

// greeting a user ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const readline = require("readline-sync");

console.log("What is your name? ");
let userName = readline.question();

if (userName.includes("!")) {
  console.log(`HELLO ${userName.toUpperCase()} WHY ARE WE SCREAMING?!`);
} else {
  console.log('Hello Bob. Nice to meet you.');
}

// multiplying two numbers ~~~~~~~~~~~~~~~~~~~~~~~~
function multiply(num1, num2) {
  return num1 * num2;
}

const multiply2 = (num1, num2) => num1 * num2;

console.log(multiply(2, 3));
console.log(multiply2(2, 3));

// squaring an argument ~~~~~~~~~~~~~~~~~~~~~~~~~~
function square(num1) {
  return num1 * num1;
}

const square2 = (num1) => num1 * num1;

function square3(num) {
  return multiply(num, num);  //from previous question
}

console.log(square(2));
console.log(square2(2));
console.log(square3(2));

// arithmetic integer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('What is the first number?');
let firstNumber = Number(readline.question());

console.log('What is the second number?');
let secondNumber = Number(readline.question());

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(firstNumber ** secondNumber);

// the end is near but not here ~~~~~~~~~~~~~~~~~~~~~
function penultimate(str) {
  let words = str.split(" ");
  let targetWord = words[words.length - 2];
  return targetWord;
}

console.log(penultimate('last word'));
console.log(penultimate('Launch School is great!'));

// exclusive or ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function xor(arg1, arg2) {
  let a = arg1;
  let b = arg2;

  if (a) {
    if (b) {
      return false; //both are true
    } else {
      return true; // a not b
    } 
  } else if (b) {
    return true; // b not a
  } else {
    return false; //both are false
  }
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));

//LS Answer ( I thought we weren't supposed to use || or && )
function xor1(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// odd lists ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function oddities(arr) {
  let newArr = [];
  arr.forEach((num, idx) => {
    if (idx % 2 === 0) {
      newArr.push(num);
    }
  });
  return newArr;
}

function eventies(arr) { //further exploration
  let newArr = [];
  arr.forEach((num, idx) => {
    if (idx % 2 !== 0) {
      newArr.push(num);
    }
  });
  return newArr;
}

console.log(oddities([2, 3, 4, 5, 6]));
console.log(eventies([2, 3, 4, 5, 6]));

// convert a string to a number ~~~~~~~~~~~~~~~~~~~~~


// convert a string to a signed number ~~~~~~~~~~~~~~~~


// convert a number to a string ~~~~~~~~~~~~~~~~~~~~~


// convert a signed number to a string ~~~~~~~~~~~~~~~~

