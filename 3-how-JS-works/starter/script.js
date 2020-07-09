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
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
