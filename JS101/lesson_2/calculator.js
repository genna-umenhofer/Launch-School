// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask the user if they want to do another calculation.
// End program or repeat the first step of asking user for number.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);
let output;
doTheCalculation();

function doTheCalculation() {
  calculator();
  console.log(`The result is: ${output}`);
  askAgain();
}

function askAgain() {
  prompt(MESSAGES["askAgain"]);
  let calculateAgain = readline.question();
  while (invalidNumber(calculateAgain)) {
    prompt(MESSAGES["invalidAnswer"]);
    calculateAgain = readline.question();
  }
  if (calculateAgain === '1') {
    doTheCalculation();
  } else {
    console.log(MESSAGES["goodbye"]);
  }
}

function getFirstNumber() {
  prompt(MESSAGES["firstNumber"]);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(MESSAGES["invalidAnswer"]);
    number1 = readline.question();
  }
  return number1;
}

function getSecondNumber() {
  prompt(MESSAGES["secondNumber"]);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(MESSAGES["invalidAnswer"]);
    number2 = readline.question();
  }
  return number2;
}

function getOperation() {
  prompt(MESSAGES["operationType"]);
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES["invalidAnswer"]);
    operation = readline.question();
  }
  return operation;
}

function calculator() {
  let number1 = getFirstNumber();
  let number2 = getSecondNumber();
  let operation = getOperation();
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
}