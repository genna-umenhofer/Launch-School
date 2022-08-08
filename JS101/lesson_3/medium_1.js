// Question 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let headline = "The Flintstones Rock!";
let numberOfSpaces = 0;

for (let counter = 0; counter <= 10; counter += 1) {
  console.log(headline.padStart(numberOfSpaces + headline.length));
  numberOfSpaces += 1;
}

// Question 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let munstersDescription = "The Munsters are creepy and spooky.";
console.log(munstersDescription.split('').map(function(element) {
  if (element === element.toUpperCase()) {
    return element.toLowerCase();
  } else {
    return element.toUpperCase();
  }
}).join(''));

// Question 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
console.log(factors(10));
console.log(factors(-10));
/*
Bonus: The purpose of that line of code is to check to see if
the number is completely divisible by the divisor with no
remainder. That is the definition of a factor of a number.
*/

// Question 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Yes, there is a difference. The .push() method mutates the
original array, where .concat() returns a new array as a result
of combining the inital two arrays. It does not mutate the
original array.
*/

// Question 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
I think this first operation will return 0.9 because both of the
operands are numbers. 0.3 added to 0.6 is 0.9. I think the
second operation will return true because of the rules of
precendence. JS will evaluate 0.3 + 0.6 first and then see if it
is === to 0.9.

*See notes for info about this answer. It is actually 0.8999 and
false.
*/

// Question 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
This code returns false. You can use the Number.isNaN() function
to test to see if something is NaN.
*/

// Question 7 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
The answer variable is unaffected by the newAnswer being passed
to the messWithItFunction. Answr was passed-by-value, so the
original value of answer stays as it is. Thus, in line 9 when 8
is subtracted from answer, we would get 34.
*/

// Question 8 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Yes, because the .forEach() method mutates the munsters object
in this case. The object that was passed into the Object.values()
function was not a copy, so it is the same pointers as the
original array.
*/

// Question 9 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
The first match is evaluated to be paper. The second match is rock.
Then, those two are compared and paper wins. Paper is put up against
rock in the last round, and paper wins. This code will output "paper".
*/

// Question 10 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
This will always return "no" becuase foo() will always return
"yes". It's sort of a trick question because the default param
for foo() is "no", but no matter what the param is for foo(), it
always returns "yes". Then, when that param is passed to bar(),
bar checks to see if "yes" === "no". This is false, so bar
returns "no".
*/
