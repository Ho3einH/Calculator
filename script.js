'use strict';

const display = document.querySelector('.display');

const addToInput = function (input) {
  display.value += input;
};

const clearInput = function () {
  display.value = '';
};
const calculate = function () {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
};


// "use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive');

const interface = 'audio';
const private = 534;
const if = 23;

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function myBio(name, age, job) {
  const biography = `My name is ${name}, I'm ${age} years old, and I'm a ${job}.`;
  return biography;
}

console.log(myBio("Hossein", 21, "student"));

// function declaration

function calcAge1 (birthyear){
  return 2037 - birthyear;
}
const age1 = calcAge1(1991);

//function expression

const calcAge2 = function (birthyear){
  return 2037 - birthyear;
}
const age2 = calcAge2(2002);

console.log(age1 , age2);

Arrow function

const calcAge1 = birthyear => 2037 - birthyear;
const age1 = calcAge1(1991);
console.log(age1);

console.log(calcAge1(1991)); // Shortcut

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return`${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas')); // Shortcut
console.log(yearsUntilRetirement(2002, 'Hossein')); // Shortcut

const age2 = yearsUntilRetirement(1991, 'Jonas');
const age3 = yearsUntilRetirement(2002, 'Hossein');
console.log(age2);
console.log(age3);

const mYear = prompt(('Tell me when you want to how old are you :'));
const shYear = 1403;
const calc = 621;
const calcAge1 = (birthyear) => Number(mYear) - birthyear;
const enter = prompt('Tell me your birth year :')
const age1 = calcAge1(Number(enter) + calc);
console.log(age1);

// functions Calling other functions

const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges. `;
  return juice;
};

console.log(fruitProcessor(2, 3));

const cutFruitPiecer = (fruit) => {
  const piece = fruit * 4;
  return piece;
};

const fruitProcessor = (apples, oranges) => {
  const applePieces = cutFruitPiecer(apples);
  const orangePieces = cutFruitPiecer(oranges);

  return `Juice with ${applePieces} Pieces of apple nad ${orangePieces} piece of orange`;
};

console.log(fruitProcessor(2, 3));

use if else statement in functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`)
    return retirement;
  } else {
      console.log(`${firstName} retires in ${retirement} years`)
    return -1;
  }
  return retirement;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

Coding Challenge #!

const calcAverage = (point1, point2, point3) => (point1 + point2 + point3) / 3;

// Test 1
let dolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);

console.log(
  `Dolphins Score is ${dolphinsScore} and Koala Score is ${koalasScore}`
);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return (`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    return (`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    return (`no teams won...`);
  }
};

// checkWinner(dolphinsScore, koalasScore) // When use the console.log instead of return in the last part of function code
console.log(checkWinner(dolphinsScore, koalasScore)); // when use the return

//Test 2
dolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);

console.log(
    `Dolphins Score is ${dolphinsScore} and Koala Score is ${koalasScore}`
  );

// checkWinner(dolphinsScore, koalasScore) // When use the console.log instead of return in the last part of function code
console.log(checkWinner(dolphinsScore, koalasScore)); // when use the return

Note
--------------------------------------------------------------------

const calcAge_1 = function(age){
  return 2024 - age; // when use return we have to use console.log to invoke the function
}

console.log(calcAge_1(2002));

//   -------------------  //

const calcAge_2 = function(age){
  console.log(2024 - age); // when use console.log we can invoke the function directly
}

calcAge_2(2002);

//   -------------------  //

const calcAge_3 = Age => 2024 - Age;

// calcAge_3(2002); we can't invoke Arrow functions directly
console.log(calcAge_3(2002));

// we can use this in function declaration and function expression

// --------------------------------------------------------------------

const friends = ['Michel', 'Steven', 'peter'];
console.log(friends);

const years = new Array (1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends [2] = 'ali';
console.log(friends);
// friends = ['ali' , 'jay']; // that's illegal

const firstName = 'jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(jonas);

Exercise

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 3]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 3]),
];

console.log(ages)

const friends = ["Micheal", "Steven", "Peter"];

// Add elements

const newLength = friends.push("jay"); // last
console.log(friends);
console.log(newLength);

friends.unshift("John"); // first
console.log(friends);

// Remove elements

friends.pop(); // last
const popped = friends.pop();
console.log(friends);
console.log(popped); // show the popped element

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

friends.push(23);
console.log(friends.includes(23));

if (friends.includes("Micheal")) {
  console.log("You have a friend called Micheal");
} else {
  console.log("none");
}

Coding Challenge #2

let bills;
let tip;

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    return tip;
  } else {
    tip = bill * 0.2;
    return tip;
  }
};

const bills = [125, 555, 44];
const tips = [];
const total = [];

const tip_1 = calcTip(bills[0]);
const tip_2 = calcTip(bills[1]);
const tip_3 = calcTip(bills[2]);

const total_1 = bills[0] + tip_1;
const total_2 = bills[1] + tip_2;
const total_3 = bills[2] + tip_3;

tips.push(tip_1, tip_2, tip_3);
total.push(total_1, total_2, total_3);

console.log(bills, tips, total);

console.log(
  `There is a ${tips.length} First Tip is ${tips[0]}, the Second tip is ${tips[1]}, And The Third Tip is ${tips[2]} And The First Total Price is ${total[0]}, The Second total Price is ${total[1]}, The Third Total Price is ${total[2]}`
);

the other way

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, total);

point

const array = [4];

array.push(1 ,2 ,3);
array.unshift(1, 2, 3);

console.log(array);

Object

const jonas = {
  firstName: "jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

------------------------------------------------ //

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas["firstName"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

------------------------------------------------ //

console.log(jonas."last" + nameKey) // That's wrong

------------------------------------------------ //

const interestedIn = prompt(
  "What do you know about Jonas ? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

------------------------------------------------ //

console.log(
  `${jonas.firstName} has a ${jonas.friends.length} friends, and his best friend Called ${jonas.friends[0]}`
);

const jonas = {
    firstName: "jonas", lastName: "Schmedtmann", birthYear: 1991, // number value
    job: "teacher", // string value
    friends: ["Michael", "Peter", "Steven"], // array value
    hasDriversLicense: true, // boolean value

    calcAge: function () {
        // function expression , function value
        this.age = 2037 - this.birthYear;
        //   console.log(this)
        return this.age;
    },

  driversLicense: function () {
    if ((this.hasDriversLicense = true)) {
      return "a";
    } else {
      return "no";
    }
    // this.License = this.hasDriversLicense = true?
    "a": "no";
    // return this.License;
  },

getSummary: function () {
    return `${this.firstName} is a ${this.calcAge(this.age)}-years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} Drivers Licenses`;
},

------------------------------------------------ //

calcAge: function (birthYear) { // function expression , function value
    return 2037 - birthYear;
}

  function calcAge(birthYear) { // illegal
      return 2037 - birthYear;
  }
};

------------------------------------------------ //
console.log(jonas.calcAge())

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.calcAge(1991)); // don't repeat yourself

Challenge
console.log(jonas.getSummary());

------------------------------------------------ //

// Coding Challenge

const Summary = {
    firstName: ["Mark", "John"],
    lastName: ["Miller", "Smith"],
    Weight: [78, 92],
    Height: [1.69, 1.95],

    calcBMI: function () {
        this.marksBMI = this.Weight[0] + (this.Height[0]) ** 2;
        this.johnsBMI = this.Weight[1] + (this.Height[1]) ** 2;
        if (this.johnsBMI > this.marksBMI) {
            return `${Summary.firstName[1]} ${Summary.lastName[1]}'s BMI (${Summary.johnsBMI}) is higher than ${Summary.firstName[0]} ${Summary.lastName[0]}'s BMI is (${Summary.marksBMI}) `;
        } else if (this.marksBMI > this.johnsBMI) {
            return `${Summary.firstName[0]} ${Summary.lastName[0]}'s BMI (${Summary.johnsBMI}) is higher than ${Summary.firstName[1]} ${Summary.lastName[1]}'s BMI is (${Summary.marksBMI}) `;
        } else {
            return `Both have The Same BMI`
        }
    },

}

- - - Test Date – - - //

console.log(`${Summary.firstName[0]}s weights ${Summary.Weight[0]} kg and is ${Summary.Height[0]} m tall
weights ${Summary.Weight[1]} kg and is ${Summary.Height[1]} m tall`);

console.log(Summary.calcBMI());

- - - - Practice Challenge - - - - //

const book = function (title, author, year, isAvailable) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = isAvailable;
};

const library = {
    name: "City Library",
    books: [],
    addBook(book) {
        this.books.push(book);
        console.log(`book titled ${book.title} has been added`)
    },
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        } else {
            console.log(`book titled ${title} not found in the ${library.name}`)
        }
    },
    listAvailableBooks: function () {
        const availableBooks = this.books.filter(book => book.isAvailable);
        console.log("Available Books");
        availableBooks.forEach(book => {
            console.log(` ${book.title} by ${book.author} (${book.year}) `)
        });
    }
};

const book1 = new book("The Great Gatsby", "F. Scott Fitzgerald", 1925, true);
const book2 = new book("To Kill a Mockingbird", "Harper Lee", 1960, false);
const book3 = new book("1984", "George Orwell", 1949, true);


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listAvailableBooks("to kill a Mockingbird");


library.removeBook('The Great Gatsby');
library.listAvailableBooks();

- - - - The End - - - - //

---------------//Loops---------------//

for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting Weights repetition 🏋️‍ ${rep}`);
}

const jonas = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //     Filling types array
  //     types[i] = typeof jonas[i]
  types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("___  ONLY STRINGS ___");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("___  BREAK WITH NUMBER ___");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
//4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--){
//     console.log(i,jonas[i]);
// }

for (let i = 1; i <= 3; i++) {
    console.log(`-------Starting Exercise------- ${i}`)
    for (let x = 1; x <= 5; x++) {
      console.log(` Exercise ${i} : Lifting weight repetition ${x}`)
  }
}

---------------//While Loop---------------//

for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting Weights repetition 🏋️‍ ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`While :Lifting Weights repetition 🏋️‍ ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`you rolled a ${dice}`);
}

Coding Challenge #4

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const arr = [];
for (let i = 0; i <= bills.length - 1; i++) {
  console.log(`the bills is : ${bills[i]}`);
  console.log(`the tip of ${bills[i]} is ${calcTip(bills[i])}`);
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}
console.log(tips, total, bills, arr);

const calcAverage = (arr) => {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        // average = average + arr[i];
        average += arr[i];
    }
    return average / arr.length;
};
console.log(calcAverage(total));
console.log(calcAverage(tips));
console.log(calcAverage(bills));