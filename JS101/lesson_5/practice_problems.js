// One ~~~~~~~~~~~~~~~~~~~~
let arr = ['10', '11', '9', '7', '8'];

console.log(arr.sort((a, b) => Number(b) - Number(a)));

// Two ~~~~~~~~~~~~~~~~~~~~
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.map(book => book['published']).sort((a, b) => Number(a) - Number(b));

//LS Answer
books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

// Three ~~~~~~~~~~~~~~~~~~~~
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2['third']).join(''));

// Four ~~~~~~~~~~~~~~~~~~~~
let arr4 = [1, [2, 3], 4];
arr4[1][1] = 4;
console.log(arr4);

let arr5 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr5[2] = 4;
console.log(arr5);

let obj3 = { first: [1, 2, [3]] };
obj3['first'][2][0] = 4;
console.log(obj3);

let obj4 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj4['a']['a'][2] = 4;
console.log(obj4);

// Five ~~~~~~~~~~~~~~~~~~~~
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;

for (let person in munsters) {
  if (munsters[person]['gender'] === 'male') {
    totalAge += munsters[person]['age'];
  }
}

console.log(totalAge);

// Six ~~~~~~~~~~~~~~~~~~~~
let munsters2 = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters2).forEach(person => {
  let name = person[0];
  let age = person[1]['age'];
  let type = person[1]['gender'];
  console.log(`${name} is a ${age}-year-old ${type}.`);
});

// Seven ~~~~~~~~~~~~~~~~~~~~
// I think that arr = [4, [3, 8]] and a = 2 and b = [3, 8]. This is
// becuase of pass by value (a) and pass by reference (b).

// Eight ~~~~~~~~~~~~~~~~~~~~
// I had trouble with this one
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let wordArray = Object.values(obj).flat().map(word => word.split('')).flat();

wordArray.forEach(letter => { //not working
  if (letter.includes('aeiouAEIOU')) {
    console.log(letter);
  }
});

console.log(wordArray);

//LS Answer:
let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

// Nine ~~~~~~~~~~~~~~~~~~~~
let arr6 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr6.map(elem => {
  if (typeof elem[0] === 'string') {
    return elem.slice().sort();
  } else {
    return elem.slice().sort((a, b) => a - b);
  }
}));

// Ten ~~~~~~~~~~~~~~~~~~~~
arr.map(arr6 => {
  return arr6.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// Eleven ~~~~~~~~~~~~~~~~~~~~
let arr7 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arr7.map(obj => {
  let incrementedObj = {};
  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }
  return incrementedObj;
}));

// Twelve ~~~~~~~~~~~~~~~~~~~~
let arr8 = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr8.map(array => array.filter(num => num % 3 === 0)));

// Thirteen ~~~~~~~~~~~~~~~~~~~~
let arr9 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

//Sort based on the sum of odd numbers

//iterate over the outer array
  //iterate over the inner array
  //sum up the odds
  //sort based on odds sum value
if oddsSum > currentHighestSum

// Fourteen ~~~~~~~~~~~~~~~~~~~~
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function capitalizeColor(array) {
  return array.map((color) => color.slice(0, 1).toUpperCase() + color.slice(1));
}

function upperCaseSize(string) {
  return string.toUpperCase();
}

let newFoodList = [];

Object.values(obj).forEach(food => {
  if (food['type'] === 'fruit') {
    newFoodList.push(capitalizeColor(food['colors']));
  } else if (food['type'] === 'vegetable') {
    newFoodList.push(upperCaseSize(food['size']));
  }
})

console.log(newFoodList);

// Fifteen ~~~~~~~~~~~~~~~~~~~~
arr.filter(obj => {
  return Object.values(obj).every(array => {
    return array.every(num => num % 2 === 0);
  });
})

// Sixteen ~~~~~~~~~~~~~~~~~~~~
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let newObj = {};

arr.forEach(subArray => {
  let key = subArray[0];
  let value = subArray[1];

  newObj[key] = value;
})

console.log(newObj);

// Seventeen ~~~~~~~~~~~~~~~~~~~~
function makeUUID() {
  let characters = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sectionLengths = [8, 4, 4, 4, 12];
  let newUUID = '';
  sectionLengths.forEach((section, sectionIndex) => {
    for(let counter = section; counter >= 1; counter--) {
      let randomIndex = Math.floor(Math.random() * characters.length); 
      newUUID += characters[randomIndex];
    }
    if (sectionIndex < sectionLengths.length - 1) {
      newUUID += '-';
    }
  })
  return newUUID;
}

console.log(makeUUID());
