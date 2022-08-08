// Question 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before looking at the answer:
The function will return two identical objects, but the objects
will not be the same objects. Each function returns a new object
every time it is called.

After looking at the answer:
I missed the fact that in the second function, the return
statement is not actually returning the object. The return
statement in the second line is technically blank, so it will
return undefined.
*/
// Question 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before looking at the answer:
I think that the last line will output [1, 2] because arrays and
objects are pass-by-reference. In this case, the numArray is
pointing to the same place as the first key in object. In this
case that's the spot in memory that holds the original array [1].
Changing one will change the original array, thus changing the other.

After looking at the answer:
No changes.
*/

// Question 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Before looking at the answer:
a) This will output `one is ["two"]` `two is ["three"]` `three is ["one"].
b) The output will be the same as in the previous question, but
the arrays will be saved in different spots in memory.
c) The output will be the same as the first question, but
because we are actually replacing the values within the array
using splice().

After looking at the answer:
a) I totally forgot about scope... The original variables will
remain the same because they are outside the scope of the
function once the console.log() is run.
b) Same idea as above...
c) No change.
*/

// Question 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return 'Please enter a valid IP Address.';
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("1.2.3.4.5"));