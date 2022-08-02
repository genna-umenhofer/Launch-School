//Given information about a loan, determine the monthly payment.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getLoanAmount() {
  prompt("What is the original loan amount? Enter your answer in XX.XX format.");
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt('Please enter your answer with numbers and decimals only.');
    loanAmount = readline.question();
  }
  prompt(`You entered $${loanAmount}.`);
  prompt('Is this correct? 1) Yes 2) No');
  let isCorrectEntry = readline.question();
  if (isCorrectEntry === '2') {
    getLoanAmount();
  }
  return Number(loanAmount);
}

function getAnnualInterestRate() {
  prompt("What is the annual interest rate (APR)? Enter your answer in XX.XX format.");
  let loanAPR = readline.question();
  while (invalidNumber(loanAPR)) {
    prompt('Please enter your answer with numbers and decimals only.');
    loanAPR = readline.question();
  }
  prompt(`You entered ${loanAPR}% per year.`);
  prompt('Is this correct? 1) Yes 2) No');
  let isCorrectEntry = readline.question();
  if (isCorrectEntry === '2') {
    getAnnualInterestRate();
  }
  return Number(loanAPR);
}

function getLoanDurationYears() {
  prompt("How many years will the loan last? Enter your answer in XX format.");
  let loanDurationYears = readline.question();
  while (invalidNumber(loanDurationYears)) {
    prompt('Please enter your answer with numbers only.');
    loanDurationYears = readline.question();
  }
  prompt(`You entered ${loanDurationYears} years.`);
  prompt('Is this correct? 1) Yes 2) No');
  let isCorrectEntry = readline.question();
  if (isCorrectEntry === '2') {
    getLoanDurationYears();
  }
  return Number(loanDurationYears);
}

function getLoanDurationMonths() {
  prompt("How many months will the loan last? Enter your answer in XX format.");
  let loanDurationMonths = readline.question();
  while (invalidNumber(loanDurationMonths)) {
    prompt('Please enter your answer with numbers only.');
    loanDurationMonths = readline.question();
  }
  prompt(`You entered ${loanDurationMonths} months.`);
  prompt('Is this correct? 1) Yes 2) No');
  let isCorrectEntry = readline.question();
  if (isCorrectEntry === '2') {
    getLoanDurationMonths();
  }
  return Number(loanDurationMonths);
}

//The actual running part of the code
prompt('Welcome to the loan calculator!');
let monthlyPayment;
calculator();
console.log(`Your monthly payment will be $${monthlyPayment}.`);

function calculator() {
  let loanAmount = getLoanAmount();
  let monthlyInterestRate = getAnnualInterestRate() / 1012;
  let loanDuration = (getLoanDurationYears() * 12) + getLoanDurationMonths();
  console.log("Loan Amount: " + loanAmount);
  console.log("Monthly Interest: " + monthlyInterestRate);
  console.log("Loan Duration: " + loanDuration);
  monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
}


//PSEUDOCODE
//Get data about the loan
    //Get loan amount from user in $XX.XX
        //Check for eroneous entries
        //Give option to continue or to re-enter
    //Get APR from user in XX.XX%

        //Check for eroneous entries
        //Give option to continue or to re-enter
    //Get loan duration from user in X years and X months
      //Check for eroneous entries
      //Give option to continue or to re-enter

//Convert the data into a useable value based on the formula needs
    //loan amount number
    //APR from percentage points to decimal
    //duration from months and years to number in months only

//Calculate the monthly payment
    // let m = p * (j / (1 - Math.pow((1 + j), (-n))));

//Tell the user the monthly payment in the form $XX.XX

//Ask user if they want to calculate another loan or not
