// Question 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.replace("important", "urgent");
console.log(newAdvice);

// Question 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
I was confused what this question was asking me to do, so I
had to look at the answer before tyring it on my own.The spread
operator (...) is used when you pass an iterable item into a
function or method. It will make each part or the iterable item
its own argument. In this case, it will pass 1, 2, 3, 4, and 5
each as an argument into the sort method which contains a
function we will use to sort the numbers. Another way to sort
the array without mutating it is to combine slice(), which
basically copies all the elements of an array and returns a new
array with the same elements as the old array. The, reverse
mutates the copy array and reverses the order of the array.
*/
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [...numbers].sort((num1, num2) => num2 - num1);
let moreNumbers = numbers.slice().reverse();
console.log(numbers);
console.log(newNumbers);
console.log(moreNumbers);

// Question 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let numbers0 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers0.includes(number1));
console.log(numbers0.includes(number2));

// Question 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let famousWords = "seven years ago...";
let introWords = "Four score and ";

let wholeQuote = introWords + famousWords;
console.log(wholeQuote);

let altWholeQuote = introWords.concat(famousWords);
console.log(altWholeQuote);

// Question 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
The .splice() method will take out all of the elements that we
specify when we pass the arguments to it. In this case it
returns the number 3. This method mutates the ariginal array, so
we can log that array to the console to see that the 3 has been
removed.
*/
let array1 = [1, 2, 3, 4, 5];

let newArray1 = array1.splice(2, 1);

console.log(newArray1);
console.log(array1);

// Question 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
The .concat() method is called on an empty array. This will make
the spread operator iterate through all of the elements in the
chars array and concatenate them with the empty array.
*/
let chars = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let newChars = [].concat(...chars);
console.log(newChars);

// Question 7 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
The Object.entries() method returns an array of an object's
key-value pairs. The .filter method then iterates through that
array and checks each pair to see if the first element is
exactly equal to "Barney" because that's the key we want to look
for. It will only keep the elements that match what we want.
Lastly, we should have just one element in the array after
filter. We use the .shift() method to take and return the one
key-value pair we want.
*/
let flintstones = { Fred: 0, Wilma: 1,
  Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

// Question 8 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let numbers9 = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

console.log(Array.isArray(numbers9));
console.log(Array.isArray(table));

// Question 9 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
First, we use Math.floor to figure out what the length is of
half the title and the difference in length from the table. Then
we call that 'padding' because that's how far we want the title
to move over. Then, the padStart() method pads the title with
the padding value.
*/
let title = 'Flinstone Family Members';
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

// Question 10 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
The .split() method separates each character and returns an
array with the characters as individual elements. the .filter()
method iterates through the array an enacts a function. We have
an anonymous funtion that filters out all of the "t" characters
and keeps them in the array. Lastly, the .length property is
read of the array, which should be the same as the number of
"t"s in the string.
*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);