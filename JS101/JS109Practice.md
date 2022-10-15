# JS 109 Practice

## Question 1
```javascript
console.log('Hello, world!');
```

This line of code uses the `.log` method on the `console` object. This method takes the contents of the parenthesis and prints them to the console. In this case, the method is passed a string argument of `'Hello, world!'` which will be printed to the console. The method will return `undefined`. 

## Question 2
```javascript
function sum(num1, num2) {
  return num1 + num2;
}
```

This **function declaration** is ultimately going to return the sum of the two **arguments** passed into it. The function name is `sum` and the two **parameters** of the function are `num1` and `num2`. On line 2, the **return** keyword is used to add the two arguments, and then return the value of the sum. This is assuming that both arguments passed into the function when it is called are the **number** type. If at least one of the arguments is not a number, then JavaScript will **coerce** the arguments to be the same type. For example, a number type argument will be coerced to a **string** type and the result would return **concatenated** instead of numberical addition. 

## Question 3
```javascript
function brendanEichQuote() {
  console.log('Always bet on JavaScript.');
}
```

On line 2 of this **function declaration** there is a `console.log()` **statement** that will print the contents of the parenthesis to the screen and **return** `undefined` when the function is **called**. In this case, the contents of the parenthesis is a **string** `'Always bet on JavaScript'`. 

## Question 4
```javascript
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
```

On line 2 of this **function declaration** there is a **variable declaration** using the `let` keyword. The variable, named `a`, hase been **defined** with a **number** type value of `1`. The variable is **block scoped**, meaning that it is only **initialized** and available:
1. when the function is **called** 
2. to the code within the function

On line 4 of this function , there is an **if statement** that will always run when `myFunction()` is called. This is because the if statement is checking the value within the parenthesis. The value here is a **boolean** type, and is set to `true`. True is a **truthy** value, so the if statement will run. 

When the if statement runs line 5 of the function will also run. This line will call the `.log()` **method** on the `console` **object** to print the contents of the parentheses to the console. The `.log()` method will **return** undefined after printing the value of `a` to the console. The `a` variable is in scope of the if statement, so the value `1` will be printed to the screen.

## Question 5
``` javascript
if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}
```

This code is an **if statement** that is checking the condition within the parentheses for a **truthy** value. In this case, the **conditional statement** ` false || true` on line 1 is using the **or operator** to check both the left side and the right side condition. JavaScript uses **short circuit evaluation** when evaluating conditional expressions. This means that the rightmost values will not be checked further if any leftmost values are evaluated as **truthy**. 

In this case, the leftmost value is **falsey** as the **boolean** value is set to `false`. The right side will be evaluated as **truthy** as the **boolean** value is set to `true`. Since the **or operator** evaluates based on the **truthiness** of ***either*** the left or the right side, this particular statement will evaluate to `true` and the code in the `if` block will run. It will log `'Yes!'` to the console and return `undefined`. The `else` block of code will never run.



















