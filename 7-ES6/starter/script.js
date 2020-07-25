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
