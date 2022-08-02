//Given information about a loan, determine the monthly payment.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getLoanAmount() {
  prompt("What is the original loan amount?\nEnter your answer in XX.XX format.")
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt('Please enter your answer with numbers and decimals only.');
    let loanAmount = readline.question();
  };
  prompt(`You entered $${loanAmount}.`)
  return loanAmount;
}

function getAnnualInterestRate() {
  prompt("What is the annual interest rate (APR)?\nEnter your answer in XX.XX format.")
  let loanAPR = readline.question();
  while (invalidNumber(loanAPR)) {
    prompt('Please enter your answer with numbers and decimals only.');
    let loanAPR = readline.question();
  };
  prompt(`You entered ${loanAPR}% per year.`)
  return loanAPR;
}

function getLoanDurationYears() {
  prompt("How many years will the loan last?\nEnter your answer in XX format.")
  let loanDurationYears = readline.question();
  while (invalidNumber(loanDurationYears)) {
    prompt('Please enter your answer with numbers only.');
    let loanDurationYears = readline.question();
  };
  prompt(`You entered ${loanDurationYears} years.`)
  return loanDurationYears;
}

function getLoanDurationMonths() {
  prompt("How many months will the loan last?\nEnter your answer in XX format.")
  let loanDurationMonths = readline.question();
  while (invalidNumber(loanDurationMonths)) {
    prompt('Please enter your answer with numbers only.');
    let loanDurationMonths = readline.question();
  };
  prompt(`You entered ${loanDurationMonths} months.`)
  return loanDurationMonths;
}

prompt('Welcome to the loan calculator!');
let moPay;
calculator();
console.log(`Your monthly payment will be $${moPay}.`);


function calculator() {
  let loAmt = Number(getLoanAmount());
  let monLoInt = (Number(getAnnualInterestRate()) / 12);
  let loDurMo = (Number(getLoanDurationYears()) * 12) + Number(getLoanDurationMonths());
  console.log("Loan Amount: " + loAmt);
  console.log("Monthly Interest: " + monLoInt);
  console.log("Loan Duration: " + loDurMo);
  moPay = loAmt * (monLoInt / (1 - Math.pow((1 + monLoInt), (-loDurMo))));
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
