const readline = require('readline-sync');
const NUMBER_OF_MONTHS_IN_A_YEAR = 12;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number))
            || (Number(number) < 0);
}

function invalidAnswer(answer) {
  //console.log(3);
  return (!((answer === '1')) && ((answer === '2'))) || Number.isNaN(Number(answer));
} // The problem is the short circuit evaluation of the answer === 1 and === 2.
// Setting this aside until I learn more and get more experience.

function invalidAnswerCheck(answer, answerName, unit) {
  prompt(`You entered ${answer} ${unit}.`);
  prompt('Is this correct? 1) Yes 2) No');
  let isCorrectEntry = readline.question();
  while (invalidAnswer(isCorrectEntry)) {
    //console.log(2);
    //console.log(invalidAnswer(isCorrectEntry));
    prompt('Please enter a valid answer.');
    isCorrectEntry = readline.question();
  }
  if (isCorrectEntry === '2') {
    answerName();
  } else if (isCorrectEntry === '1') {
    prompt('Great! You may continue.');
  }
}

function getLoanAmount() {
  prompt("What is the original loan amount? Enter your answer in XX.XX format.");
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    //console.log(1);
    prompt('Please enter a valid answer.');
    loanAmount = readline.question();
  }
  invalidAnswerCheck(loanAmount, getLoanAmount, 'dollars');
  //console.log(4);
  return Number(loanAmount);
}

function getAnnualInterestRate() {
  prompt("What is the annual interest rate (APR)? Enter your answer in XX.XX format.");
  let loanAPR = readline.question();
  while (invalidNumber(loanAPR)) {
    prompt('Please enter a valid answer.');
    loanAPR = readline.question();
  }
  invalidAnswerCheck(loanAPR, getAnnualInterestRate, '%');
  return Number(loanAPR);
}

function getLoanDurationYears() {
  prompt("How many years will the loan last? Enter your answer in XX format.");
  let loanDurationYears = readline.question();
  while (invalidNumber(loanDurationYears)) {
    prompt('Please enter a valid answer.');
    loanDurationYears = readline.question();
  }
  invalidAnswerCheck(loanDurationYears, getLoanDurationYears, 'years');
  return Number(loanDurationYears);
}

function getLoanDurationMonths() {
  prompt("How many months will the loan last? Enter your answer in XX format.");
  let loanDurationMonths = readline.question();
  while (invalidNumber(loanDurationMonths)) {
    prompt('Please enter a valid answer.');
    loanDurationMonths = readline.question();
  }
  invalidAnswerCheck(loanDurationMonths, getLoanDurationMonths, 'months');
  return Number(loanDurationMonths);
}

function askAgain() {
  prompt('Would you like to do another calculation? 1) Yes 2) No');
  let calculateAgain = readline.question();
  while (invalidNumber(calculateAgain)) {
    prompt('Please enter a valid answer.');
    calculateAgain = readline.question();
  }
  if (calculateAgain === '1') {
    calculator();
  } else {
    console.log("Thank you for using the calculator. Goodbye!");
  }
}

prompt('Welcome to the loan calculator!');
calculator();

function annualToMonthlyRate(apr) {
  if (apr === 0) {
    return 0;
  } else {
    let percentAsDecimal = apr / 100;
    let perMonth = percentAsDecimal / NUMBER_OF_MONTHS_IN_A_YEAR;
    return Number(perMonth);
  }
}

function calculator() {
  let monthlyPayment;
  let loanAmount = getLoanAmount();
  let monthlyInterestRate = (annualToMonthlyRate(getAnnualInterestRate()));
  let loanDuration = (getLoanDurationYears() * NUMBER_OF_MONTHS_IN_A_YEAR)
                              + getLoanDurationMonths();
  if (monthlyInterestRate === 0) {
    monthlyPayment = (loanAmount / loanDuration);
  } else {
    monthlyPayment = loanAmount *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  }
  console.log(`Your monthly payment will be $${monthlyPayment.toFixed(2)}.`);
  askAgain();
}