// Question 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Beofre solution:
This will return an empty array because none of the elements
are going to be selected.

After solution:
A copy of the original array will be rutrned because the value
'hi' is always truthy. If the result of the callback function is
truthy, the .filter() method will return the value of the index.
*/

// Question 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before solution:
This will return the array [1, 4, 9] because the callback
function multiplies each number by itself and returns the
transformed array.

After solution:
Because there is no explicit return when we use {}, the method
will return the array [undefined, undefined, undefined].
*/

// Question 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before solution:
I think that this code will return the array [1, 4, 9] because
the callback function does not need an explicit return in this
case.

After solution:
No change.
*/

// Question 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before solution:
The pop() method takes off one element. Then the length method
returns the property value, which is now one less than the
original array due to pop(). It should return 2.

After solution:
The pop() method returns the last element that it removed. Then,
length is called on the return value of pop(). The final return
value 11 is the length of the string that was removed by pop().
*/

// Question 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before solution:
The return value of this callback will be a truthy value, which
is the result of multiplying the element by 2. As long as the
value is a number that is not 0, then it will return a truthy
value. The .every() method returns true because all the lements
in this case are numbers that are not 0.

After solution:
No changes
*/

// Question 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before solution:
We can figure this out by looking at the documentation and
testing the method in node. The .fill() method fills an array
with the specified value to the whole length of the array. It is
destructive and will return the mutated array.

After solution:

*/

// Question 7 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before solution:
I think map will return both of the results into an array
['ant', undefined] because map always transforms the element. In
this case there is no transformation on 'ant' and 'bear' will
not pass the if statement.

After solution:
I should have read the if statement more closely. [undefined,
  'bear']. Amse answer, just flip-flopped.
*/

// Question 8 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Question 9 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Question 10 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Question 11 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

