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

