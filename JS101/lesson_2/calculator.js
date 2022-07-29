// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask the user if they want to do another calculation.
// End program or repeat the first step of asking user for number.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to calculator!");
let output;
doTheCalculation();

function doTheCalculation() {
  calculator();
  console.log(`The result is: ${output}`);
  askAgain();
}

function askAgain() {
  prompt("Would you like to perform another calculation?\n 1) Yes 2) No");
  let calculateAgain = readline.question();
  while (invalidNumber(calculateAgain)) {
    prompt('Hmm.. that doesn\'t look like a valid answer.\nPlease enter 1 for yes or 2 for no.');
    calculateAgain = readline.question();
  }
  if (calculateAgain === '1') {
    doTheCalculation();
  } else {
    console.log('Thanks for using the calculator!');
  }
}

function getFirstNumber() {
  prompt("What is the first number?");
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt('Hmm.. that doesn\'t look like a valid number.\nPlease enter a valid number.');
    number1 = readline.question();
  }
  return number1;
}

function getSecondNumber() {
  prompt("What is the second number?");
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt('Hmm.. that doesn\'t look like a valid number.\nPlease enter a valid number.');
    number2 = readline.question();
  }
  return number2;
}

function getOperation() {
  prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Please choose 1, 2, 3, or 4.\n1) Add 2) Subtract 3) Multiply 4) Divide');
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