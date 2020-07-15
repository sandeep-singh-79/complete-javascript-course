/////////////////////////////
// Lecture: Function constructor

/* var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// we do not need to declare the member variables in this case.
var Person = function (name, birth_year, job) {
    this.name = name;
    this.yearOfBirth = birth_year;
    this.job = job;
    // one way to add a common function
    // this.calculateAge = function () { };
}
// second way to add a method/property to an object as well as
// inherited by the instances of the type.
Person.prototype.calc_age = function () {
    console.log(new Date().getFullYear() - this.yearOfBirth);
};

// instantiate an object of type Person
var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");
// first an empty object is created. this is followed by a function call
// this creates a new execution context.
// The 'this' variable is set to the newly created blank object by the 'new' operator
// instead of attaching them to the global scope.
// If the function constructor does not return any thing then the newly created object
// is returned (as above)
john.calc_age();
jane.calc_age();
mark.calc_age(); */

/////////////////////////////
// Lecture: Object.create
/* 
// create an object prototype first
var personProto = {
  calculate_age: function () {
    console.log(new Date().getFullYear() - this.yearOfBirth);
  },
};

// create an object of type personProto
var john = Object.create(personProto);
// enter values for the instance
john.name = "John";
john.yearOfBirth = 1998;
john.job = "teacher";

// alternate way to use Object.create
var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: [(value: "designer")],
});

// The main difference between function constructor and Object.create
// In Object.create the object inherits from the prototype object passed to create method
// whereas, in function constructor, the object inherits from the prototype property of the
// function coonstructor.
// The main benefit of Object.create allows for implementation of complex inheritance.
 */

/////////////////////////////
// Lecture: Primitives vs objects
/* 
var a = 35;
var b = a;
a = 39;
console.log(`a: ${a}`, `b: ${b}`);

var obj1 = {
  name: "John",
  age: 25,
};
var obj2 = obj1;
obj1.age = 98;
console.log(obj1);
console.log(obj2);

// Functions
var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon",
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);
 */

/////////////////////////////
// Lecture: Passing functions as arguments
/* 
// functions are first rate citizens. They are derived from Object
// they can be passed to other functions. A function can also return a function
// a function passed to another function is called a callback function.
var years = [1990, 1965, 1937, 2005, 1995];

function array_calc(arr, fn) {
  var arr_result = [];
  // for (const arr_item of arr) {
  //   arr_result.push(fn(arr_item));
  // }
  arr.forEach((element) => {
    arr_result.push(fn(element));
  });

  return arr_result;
}

function isOfAge(age) {
  return age >= 18;
}

function calc_age(birth_year) {
  return new Date().getFullYear() - birth_year;
}

function max_heart_rate(age) {
  if (age >= 18 && age <= 81) return Math.round(206.9 - 6.67 * age);
  else return -1;
}

const ages = array_calc(years, calc_age);
console.log(ages);
console.log(array_calc(ages, isOfAge));
console.log(array_calc(ages, max_heart_rate));
 */

/////////////////////////////
// Lecture: Functions returning functions
/* 
function interview_question(job) {
  // depending on the job a different function is returned
  if (job === "designer") {
    return function (name) {
      console.log(`${name}, can you please explain what UX design is?`);
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(`What subject do you teach ${name}?`);
    };
  } else {
    return function (name) {
      console.log(`Hello ${name}! What do you do?`);
    };
  }
}

var teacher_question = interview_question('teacher');
var designer_question = interview_question('designer');

console.log(teacher_question('John'));
console.log(interview_question('teacher')('Mark'));
console.log(designer_question('John')); 
*/

/////////////////////////////
// Lecture: Immediately invoked Function Expressions (IIFE)
/* 
// a game where a player wins if the score is greater than 5
// the score should not be displayed in public

// function game() {
//   console.log(Math.random() * 10 >= 5);
// }

// game();

// how to use IIFE:
// create an anonymous function
// surround it with parentheses
// then call it by supplying another set of empty parentheses.
// doing this promotes data privacy.
// an IIFE can be called only once

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
//console.log(score); // as score is private to the anonymous function.

// IIFE with a param
// simply pass the param value in the final parentheses
(function (goodluck) {
  console.log(Math.random() * 10 >= 5 - goodluck);
})(5);
 */

/////////////////////////////
// Lecture: Closures
/* 
// calculate the time left till retirement
// create a function tha returns a function that does that
function years_till_retirement(retire_age) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = new Date().getFullYear() - yearOfBirth;
    console.log(retire_age - age + a);
  };
}

// On calling function years_till_retirement, the variable 'a' is created and
// the anonymous function is returned. On calling the returned function with the current age
// of the candidate, the calculation and completed and the correct result output.
var retirement_age_US = years_till_retirement(66);
var retirement_age_germany = years_till_retirement(65);
var retirement_age_iceland = years_till_retirement(67);
retirement_age_germany(1990);
retirement_age_US(1990);
retirement_age_iceland(1990);
// the below is similar to the US retirement example.
//years_till_retirement(66)(1990);
 */

function interview_question(job) {
  return function (name) {
    if (job === "designer") {
      console.log(`${name}, can you please explain what UX design is?`);
    } else if (job === "teacher") {
      console.log(`What subject do you teach ${name}?`);
    } else {
      console.log(`Hello ${name}! What do you do?`);
    }
  };
}

interview_question('teacher')('John');
