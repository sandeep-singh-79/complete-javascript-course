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

/*
let massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;
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
console.log('Is Mark\'s BMI higher than John\'s? ' + isBmiHigher);
*/

/*****************************
 * If / else statements
 */

/* let firstName, civilStatus;
firstName = "John";
civilStatus = "single";

if ("married" === civilStatus) {
  console.log(firstName + ` is married!`);
} else {
  console.log(firstName + ` will hopefully marry soon :)`);
}

let isMarried = true;
if (isMarried) {
  console.log(firstName + ` is married!`);
} else {
  console.log(firstName + ` will hopefully marry soon :)`);
}

let massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;
massJohn = new Number(prompt("What is John's weight? "));
heightJohn = new Number(prompt("What is John's height? "));

massMark = new Number(prompt("What is Mark's weight? "));
heightMark = new Number(prompt("What is Mark's height? "));

// calculate BMI
bmiJohn = massJohn / heightJohn ** 2;
bmiMark = massMark / heightMark ** 2;
console.log(
  `John's details - height: ${heightJohn}, weight: ${massJohn} and, bmi: ${bmiJohn}`
);
console.log(
  `Mark's details - height: ${heightMark}, weight: ${heightMark} and, bmi: ${bmiMark}`
);

if (bmiMark > bmiJohn) console.log("Mark's BMI higher than John's");
else console.log(`John's BMI is higher than Mark's.`); */

/*****************************
 * Boolean Logic
 */

/* 
let firstName = "John";
let age = 16;

if (age < 13) console.log(`${firstName} is a boy`);
else if (age >= 13 && age < 20) console.log(`${firstName} is a teenager`);
else if (age >= 20 && age < 30) console.log(`${firstName} is a young man`);
else console.log(`${firstName} is a man`);
 */

/*****************************
 * The Ternary Operator and Switch statement
 */

/* let firstName = "John";
let age = 16;

// Ternary Operator
age >= 18
  ? console.log(`${firstName} drinks beer.`)
  : console.log(`${firstName} drinks juice.`);

var drink = age >= age ? "beer" : "juice"; */

/* if (age >= 18) var drink = "beer";
else var drink = "juice"; */

/* // Switch statement
let job = "teacher";

switch (job) {
  case "teacher":
  case "instructor":
    console.log(`${job} teaches kids how to code.`);
    break;
  case "driver":
    console.log(`${job} drives an uber in Lisbon.`);
    break;
  case "designer":
    console.log(`${job} designs beautiful websites.`);
    break;
  default:
    console.log(`${job} does something else.`);
}

// using boolean to ensure the code inside is evaluated
switch (true) {
  case age < 13:
    console.log(`${firstName} is a boy`);
    break;
  case age >= 13 && age < 20:
    console.log(`${firstName} is a teenager`);
    break;
  case age >= 20 && age < 30:
    console.log(`${firstName} is a young man`);
    break;
  default:
    console.log(`${firstName} is a man`);
} */

/*****************************
 * Truthy and Falsy values and equality operators
 */

// Falsy values: undefined, null, 0, '', NaN
// called so as they evaluate to false when evaluated in if construct
// Truthy values: NOT falsy values

/* let height;
height = 23;

if (height || height === 0) console.log(`variable is defined`);
else console.log("variable is not defined");


if (height === '23') console.log('The == operator does type coercion!') */
// the == operator uses type coercion during comparision
// the === operator/strict equality operator compares the objects as is
// without any type coercion.

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/* let john_team,
  mike_team,
  mary_team,
  john_team_avg,
  mike_team_avg,
  mary_team_avg;
john_team = [89, 120, 103];
mike_team = [116, 94, 123];
mary_team = [97, 134, 105];

function get_team_sum(team) {
  let sum = 0;
  team.forEach((element) => {
    sum += element;
  });
  return sum;
}

function get_team_avg(team) {
  return get_team_sum(team) / team.length;
}

john_team_avg = get_team_avg(john_team);
console.log(`Avg score of John's team is: ${john_team_avg}`);
mike_team_avg = get_team_avg(mike_team);
console.log(`Avg score of Mike's team is: ${mike_team_avg}`);
mary_team_avg = get_team_avg(mary_team);
console.log(`Avg score of Mary's team is: ${mary_team_avg}`);

if (john_team_avg > mike_team_avg && john_team_avg > mary_team_avg)
  console.log(`John's team wins with ${john_team_avg} score`);
else if (mike_team_avg > john_team_avg && mike_team_avg > mary_team_avg)
  console.log(`Mike's team wins with ${mike_team_avg} score`);
else if (mary_team_avg > john_team_avg && mike_team_avg < mary_team_avg)
  console.log(`Mary's team wins with ${mary_team_avg} score`);
else if (
  john_team_avg === mike_team_avg ||
  john_team_avg == mary_team_avg ||
  mike_team_avg === mary_team_avg
)
  console.log("It's a draw!!!"); */
  