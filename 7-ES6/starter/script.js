/////////////////////////////////
// Lecture: let and const
/* 
ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";

console.log(name5);

// ES6
const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6);

// ES5
function driver_license5(is_test_cleared) {
  if (is_test_cleared) {
    console.log(first_name);
    var first_name = "John";
    var birth_year = 1990;

    console.log(
      `${first_name} born in ${birth_year} is now officially allowed to drive a car.`
    );
  }
}
driver_license5(true);

// ES6
function driver_license6(is_test_cleared) {
  let first_name;
  const birth_year = 1990; // const has to be defined at the time of declaration itself.
  if (is_test_cleared) {
    //console.log(first_name);
    first_name = "John";
    //birth_year = 1990; // this does not work as we are defining the const after declaration.

    console.log(
      `${first_name} born in ${birth_year} is now officially allowed to drive a car.`
    );
  }
}
driver_license6(true);

let i = 23;
for (let i = 0; i < 5; ++i) {
    console.log(i);
}

console.log(i);
// as 'let' variables are block scoped the value of i is limited within the for loop. 
*/

/////////////////////////////////
// Lecture: Blocks and IIFE

// In ES6 we can define a block as below:
/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);


// ES5
(function() {
    var c = 3;
})();

//console.log(c);
*/

/////////////////////////////////
// Lecture: Strings
/* 
let first_name = "john";
let last_name = "Smith";
const birth_year = 1990;
function calc_age(year) {
  return new Date().getFullYear() - year;
}

// ES5
console.log(
  "This is " +
    first_name +
    " " +
    last_name +
    ". He was born in " +
    birth_year +
    ". Today he is " +
    calc_age(birth_year) +
    " years old."
);

// ES6
console.log(`This is ${first_name} ${last_name}. He was born in ${birth_year}. Today he is ${calc_age(birth_year)} years old.`)

const n = `${first_name} ${last_name}`
console.log(n.startsWith('J')); // new ES6 String method. is case sensitive
console.log(n.endsWith('th')); // new ES6 String method
console.log(n.includes(' ')); // if a string contains some particular char or combination. ES 6
console.log(first_name.repeat(3)); // it repeats the string the method is called on.
 */

/////////////////////////////////
// Lecture: arrow functions
/* 
const years = [1990, 1965, 1982, 1937]

// ES5
var ages5 = years.map(function (curr_element, curr_index, array) {
    return new Date().getFullYear() - curr_element;
});
console.log(ages5)

// ES6
let ages6 = years.map(element => new Date().getFullYear() - element);
console.log(ages6);

ages6 = years.map((element, index) => `Age element ${index + 1}: ${new Date().getFullYear() - element}`
);
console.log(ages6);

// with multiple statements surrounded by curly braces, an explicit return statement is required.
ages6 = years.map((element, index) => {
    const current_year = new Date().getFullYear();
    const age = current_year - element;
    return `Age element ${index + 1}: ${age}`
});
console.log(ages6);
 */

/////////////////////////////////
// Lecture: arrow functions 2

// arrow functions share the surrouding this context
// hence they are said to share the Lexical this context
/* 
// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + this.position + "and it is " + this.color;
      alert(str);
    });
  },
  click_me: function () {
    var self = this; // this is a hack to get around the this context pointing to global context
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + self.position + "and it is " + self.color;
      alert(str);
    });
  },
};
box5.clickMe();
box5.click_me();
// here the this keyword is pointing to the global context/object - window in this instance.
// only in a method does the this keyword define to the object calling the method.

// ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      const str =
        "This is box number " + this.position + "and it is " + this.color;
      alert(str);
    });
  },
};
box6.clickMe();

// this one will not work as the this context would be limited to with in the first
// arrow function and not available in the second arrow function
const box66 = {
  color: "green",
  position: 1,
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      const str =
        "This is box number " + this.position + "and it is " + this.color;
      alert(str);
    });
  },
};
box66.clickMe();
 */
/* 
function Person(name) {
  this.name = name;
}

// this keyword does not point to the object but to the global object inside the second anonymous function
// the workaround is to use bind, call or apply methods. while using the bill, call or apply methods ensure that you pass the appropriate 'this' context - 'this' in our case.
Person.prototype.myFriends5 = function (friends) {
  // here 'this' points to the object calling myFriends4 method
  var arr = friends.map(
    function (el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  // binding 'this' in this manner will make the Person object available inside the map anonymous function
  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function (friends) {
  // here 'this' points to the object calling myFriends4 method
  var arr = friends.map(el => `${this.name} is friends with ${el}`);
  // binding 'this' in this manner will make the Person object available inside the map anonymous function
  console.log(arr);
};

new Person("Mike").myFriends6(friends);
 */

/////////////////////////////////
// Lecture: Destructuring
/* 
// it allows us to to multiple assingment in case we are initializing from a data structure.
// we are effectively destructuring the data from a data structure in to individual variables.
// this provides for a convenient way to initialize multiple variables from an object or DS
// ES5
var john = ["John", 25];
// var name = john[0]
// var age = john[1]

// ES6
const [name, age] = ["John", 25];
console.log(`${name} is ${age} years old.`);

const obj = {
  first_name: "John",
  last_name: "Smith",
};
const { first_name, last_name } = obj;
const { first_name: fname, last_name: lname } = obj;
console.log(`${first_name} ${last_name}`);
console.log(`${fname} ${lname}`);

function calc_retirement_age(year) {
  const age = new Date().getFullYear() - year;

  return [age, 65 - age];
}

const [age2, retirement] = calc_retirement_age(2000);
console.log(age2, retirement);
*/

/////////////////////////////////
// Lecture: Arrays in ES6
/* 
const boxes = document.querySelectorAll(".box");

// 5ES
var boxesArr = Array.prototype.slice.call(boxes);
// boxesArr.array.forEach(function (curr) {
//   curr.style.backgroundColor = 'dodgerblue'
// });
for (var i = 0; i < boxesArr.length; i++) {
  if (boxesArr[i].className === "box blue") continue;
  boxesArr[i].textContent = "I changed to blue";
}

// ES6
const boxesArr6 = Array.from(boxes);
// boxesArr6
Array.from(boxes).forEach(
  (curr) => (curr.style.backgroundColor = "dodgerblue")
);

for (const box of boxesArr6) {
  if (box.className.includes("blue")) continue;
  box.textContent = "I changed to blue.";
}

// ES5
var ages5 = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (curr) {
  return curr >= 18;
});

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
// findIndex(callback) returns the index of the array that meets the criteria
ages.findIndex((curr) => curr >= 18);
// find(callback) returns the array element that meets the criteria
ages.find((curr) => curr >= 18);
*/

/////////////////////////////////
// Lecture: The Spread Operator
/* 
// convenient way to expand elements of an array
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
ages = [18, 30, 12, 21];
// apply will take the elements of the array and pass them in to the
// method addFourAges. The function receives individual elements instead of the array
var sum2 = addFourAges.apply(null, ages);

// ES6
// the spread operator spreads out the elements of the array.
const sum3 = addFourAges(...ages);

const familySmith = ["John", "jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];

const bigFamily = [...familySmith, ...familyMiller];
const bigFamily1 = [...familySmith, "Lily", ...familyMiller];

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];
Array.from(all).forEach((curr) => (curr.style.color = "purple"));
*/

/////////////////////////////////
// Lecture: Rest Parameters
/* 
// // the rest parameters allow for us to pass an indeterminate number of params to a function
// // The notation is the same as the Spread Operator

// // ES5
// // we do not define any params. We use arguments keyword
// // arguments is an array like structure. It needs to be converted to array
// function isFullAge5() {
//   var argsArr = Array.prototype.slice.call(arguments);
//   argsArr.forEach(function (curr) {
//     console.log(new Date().getFullYear() - curr >= 18);
//   });
// }

// // isFullAge5(1990, 1999, 1965);
// // isFullAge5(1990, 1999, 1965, 2000);

// // ES6
// // The Rest operator transforms the arguments being passed to the function
// // in to an array. Now we can easily operate on the array
// function isFullAge6(...years) {
//   years.forEach((curr) => console.log(new Date().getFullYear() - curr >= 18));
// }

// we want to pass the limit when a person comes of age
// here limit will be part of the arguments. so any operation performed on arguments
// will take limit in to consideration.
function isFullAge5(limit) {
  // here we need to pass another argument to the call method
  // that will tell the call method to ignore the first argument
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.forEach(function (curr) {
    console.log(new Date().getFullYear() - curr >= limit);
  });
}

isFullAge5(21, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2000);

// ES6
// The Rest operator transforms the arguments being passed to the function
// in to an array. Now we can easily operate on the array
function isFullAge6(limit, ...years) {
  years.forEach((curr) =>
    console.log(new Date().getFullYear() - curr >= limit)
  );
}
isFullAge6(18, 1990, 1999, 1965, 2016, 1987);
*/

/////////////////////////////////
// Lecture: Default Parameters

/*
// ES5
function SmithPerson(firstName, birthYear, lastName, nationality) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  lastName === undefined
    ? (this.lastName = "Smith")
    : (this.lastName = lastName);
  nationality == undefined
    ? (this.nationality = "american")
    : (this.nationality = nationality);
}


// ES6
function SmithPerson(
  firstName,
  birthYear,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.lastName = lastName;
  this.nationality = nationality;
}
// JS allows us to call functions without all the parameters
// the unsupplied params are assigned 'undefined'
var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spanish");
*/

/////////////////////////////////
// Lecture: Maps
/* 
// can use any of the primitive datatypes as well as functions and objects as keys
const question = new Map();
question.set(
  "question",
  "what is the official name of the latest major Javascript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct Answer!");
question.set(false, "Wrong Answer! Please try again!");

console.log(question.get("question"));
// console.log(question.size);

if (question.has(4)) {
  //question.delete(4); // supply the key to delete
  console.log("Answer 4 is here");
}

//question.clear(); // deletes all the entries from the map

// question.forEach((value, key) =>
//   console.log(`This is ${key}, and it's set to ${value}`)
// );

// this does not work as the return type is an array of key value pairs
// for (const entry of question.entries()) {
//   console.log(`This is ${entry.key}, and it's set to ${entry.value}`);
// }

for (const [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = parseInt(prompt("Enter the correct answer: "));

console.log(question.get(answer == question.get("correct")));
*/

/////////////////////////////////
// Lecture: Classes

// class definitions are not hoisted. A class needs to be defined before we can create objects of it
// Also, properties cannot be added to a class as it is not recommended.
/* 
// ES5
var Person5 = function (name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};

var john5 = new Person5("John", 1998, "teacher");

// ES6
class Person6 {
  constructor(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.birthYear;
    console.log(age);
  }

  static greeting() {
    console.log("Hey There!");
  }
}

const john6 = new Person6("John", 1998, "teacher");

Person6.greeting();
*/
