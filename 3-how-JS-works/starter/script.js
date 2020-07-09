///////////////////////////////////////
// Lecture: Hoisting
/* 
// calculateAge(1965);

function calculateAge(year) {
  console.log(new Date().getFullYear() - year);
}

// does not work as retirement is a function expression
// and not a function declaration
// retirement(1990);
// retirement(1965);

let retirement = function (year) {
  console.log(65 - calculateAge(year));
};

// variables. Code is scanned for variable declaration
// the declaration is then moved to the top of the scope.
// in this case Global scope or window.
console.log(age);
var age = 23;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
 */

///////////////////////////////////////
// Lecture: Scoping
// to define or limit the scope, JS requires us to create a new function
// lexical scoping - a nested function can access the members of the outer(parent) function.
// locally scoped variables are not visible in parent scope.

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/* 
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  // console.log(c); // this is not accessible here as c is not in scope of function third
  // console.log(a + d);
  console.log(a + b + c + d); // again b and c are not available here.
} 
*/

///////////////////////////////////////
// Lecture: The this keyword

