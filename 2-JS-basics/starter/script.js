// console.log ('Hello World!!!')

/* var firstName = 'John'
console.log(firstName);

var lastName = 'Smith'
var age = 28

var fullAge = true;
console.log(fullAge)

var job;
console.log(job)

job = 'Teacher'
console.log(job)

var 3Years = 3 */

/*
 * Variable mutation and type coercion
 */

var firstName = "John";
var age = 28;

// Type Coercion
/* console.log(firstName + " " + age);

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// Variable Mutation
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastname = prompt("what is his last name? ");
console.log(firstName + " " + lastname); */

/*
 * Basic Operators
 */
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// logical operators
var johnOlder = /* ageJohn > ageMark */ ageJohn < ageMark;
console.log(johnOlder);

// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log('x is a var of type ' + typeof x);
