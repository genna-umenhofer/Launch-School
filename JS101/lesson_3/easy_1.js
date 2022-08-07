// Question 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
No this code will not raise an error because adding a 7th element is
valid code, even if the array does not have 6 elements in it already.
The items between numbers[2] and numbers[5] will be empty items
that return 'undefined'.

Bonus:
Line 3 will return 'undefined'.
*/

// Question 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
To see if a string includes an exclamation mark, you can use the
.includes() method. The method will iterator over the string and
return 'true' if the string includes the string you place within the
parentheses. It will return false if the string does not contain what
you placed within the parentheses.

LS Answer: more specifically, used the .endsWith() method.
*/

// Question 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
You could figure out if an object has an entry for a key by using
bracket or dot notation. In this case, we will want to use bracket
notation because it will be more clear that we are looking for a string.
If you return ages['Spot'] and log it to the console, it will return
'undefined'. This means that the object does not contain the key we are
looking for.

LS Answer: Use the .hasOwnProperty() method.
*/

// Question 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newMunstersDescription = munstersDescription.toLowerCase().slice(1);
let firstLetter = munstersDescription.slice(0,1).toUpperCase();
munstersDescription = firstLetter.concat(newMunstersDescription);

console.log(munstersDescription);

//LS Answer:
munstersDescription = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

// Question 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Line 1 will output 'true' because the boolean 'false' will be
implicitly coerced to the number 0 when you use the nonstrict equality
operator. The number 0 will then be compared to the string '0'. When JS
does this comparisson, it coerces the string and number to the same
type and compares them. In this case, 0 and '0' would be equal, so this
is returned as 'true'.

Line 2 will output 'false', because it uses the strict equality
operator. The strict equality operator does not implicitly coerce the
operands to the same type. In this case 'false' is a boolean value, and
'0' is a string, so they are not equal. This, it returns 'false'.
*/

// Question 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);

// Question 7 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
This is a better place to use the .includes() method.
*/
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
str1.includes('Dino');
str2.includes('Dino');

// Question 8 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

// Question 9 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones2.push("Dino", "Hoppy");

// Question 10 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.slice(0, 38);
console.log(newAdvice);

//LS Answer:
advice.slice(0, advice.indexOf('house'));