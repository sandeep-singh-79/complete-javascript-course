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

/* var firstName = "John";
var age = 28; */

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
/* var now, yearJohn, yearMark;
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
var johnOlder =  ageJohn < ageMark;
console.log(johnOlder);

// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log('x is a var of type ' + typeof x);
*/

/*
 * operator precedence
 */
/* var now, yearJohn, fullAge;
now = 2018;
yearJohn = 1989;
fullAge = 18;

var isFullAge = yearJohn - now >= fullAge;
console.log(isFullAge);
// this works as '-' has higher precedence over the other operators.

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = ageJohn + ageMark / 2; // without grouping
console.log(average);
var avg = (ageJohn + ageMark) / 2; // with grouping
console.log(avg);

// multiple assignments
var x, y;
// x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); // console.log(x);
// above works as assignment operator works from right to left
// while most operators work left to right

// More operators
x = x * 2;
x *= x;
console.log(x);

x += 10;
console.log(x);
// x = x + 1;
// x += 1;
x++; // x--
console.log(x); */

/*****************************
 * CODING CHALLENGE 1
 */

/*
* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

* 1. Store Mark's and John's mass and height in variables
* 2. Calculate both their BMIs
* 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
* 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*
* GOOD LUCK 😀
*/
// Solution

/* let massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;
massJohn = new Number(prompt('What is John\'s weight? '));
heightJohn = new Number(prompt('What is John\'s height? '));
console.log('weight of john: ' + massJohn);
console.log('height of john: ' + heightJohn);
massMark = new Number(prompt('What is Mark\'s weight? '));
heightMark = new Number(prompt('What is Mark\'s height? '));
console.log("weight of Mark: " + massMark);
console.log("height of Mark: " + heightMark);

// calculate BMI
bmiJohn = massJohn / (heightJohn ** 2);
bmiMark = massMark / (heightMark ** 2);
console.log("bmi of john: " + bmiJohn);
console.log("bmi of mark: " + bmiMark);

let isBmiHigher = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + isBmiHigher); */
