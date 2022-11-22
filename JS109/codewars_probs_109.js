/*
input: string
Output: object
- object will be key of each letter, value the count of the letter

- make an empty object
- iterate over the string
  - check the object to see if the current letter is already a key
  - if it isn't, make it a key
  - set count equal to zero
  - iterate over the string and count each time the current letter appears
  - push the count to the current letter key of the object
- return the object
*/

function letterCount(s){
  const letterCountObj = {};
  for (let idx1 = 0; idx1 <= s.length; idx1++) {
    let currentLetter = s[idx1];
    if (!`${s[idx1]}` in letterCountObj) {
      letterCountObj[currentLetter] = 0;
    }
    let count = 0;
    for (let idx2 = 0; idx2 <= s.length - 1; idx2++) {
      if (s[idx2] === currentLetter) {
        count++;
      }
    }
    letterCountObj[currentLetter] = count;
  }
  return letterCountObj;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~