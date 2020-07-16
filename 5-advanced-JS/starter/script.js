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
*/

/////////////////////////////
// Lecture: Bind, Call, Apply
/* 
// The above methods allow for setting a manual context for the 'this' object

var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function (style, time_of_day) {
    if (style === "formal")
      console.log(
        `Good ${time_of_day}, Ladies and Gentlemen! I'm ${this.name}, I'm a ${this.job} and, I'm ${this.age} years old.`
      );
    else if (style === "friendly")
      console.log(
        `Hey! What's up? I'm ${this.name}, I'm a ${this.job} and, I'm ${this.age} years old. Have a nice ${time_of_day}.`
      );
  },
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer",
};

john.presentation("formal", "Morning");
// to call the presentation method on emily object without defining it. this is called method borrowing
// method 1: call method.
john.presentation.call(emily, "friendly", "afternoon");
john.presentation.apply(emily, ["friendly", "afternoon"]);
// with bind we can create a static binding of the this object as well as a specific parameter. This is also called 'Currying'.
var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("afternoon");
johnFriendly("night");

var years = [1990, 1965, 1937, 2005, 1995];

function array_calc(arr, fn) {
  var arr_result = [];
  arr.forEach((element) => {
    arr_result.push(fn(element));
  });

  return arr_result;
}

function isOfAge(limit, age) {
  return age >= limit;
}

function calc_age(birth_year) {
  return new Date().getFullYear() - birth_year;
}

console.log(array_calc(years, calc_age));
console.log(array_calc(array_calc(years, calc_age), isOfAge.bind(this, 20)));
 */

/////////////////////////////
// Coding Challenge 7
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/* 
////// Personal Solution
var Question = function (question_num, question, answers, correct_answer) {
  this.question = question;
  this.answers = answers;
  this.correct_answer = correct_answer;
  this.question_num = question_num;
};

function select_random_question(total_questions) {
  const random_question_index = Math.floor(Math.random() * total_questions);
  console.log(random_question_index);
  return random_question_index;
}

var questions = new Array();
var total_questions = questions.push(
  new Question(
    1,
    "How does selenium work?",
    ["Json Wire Protocol (JWP)", "Javascript", "Java", "Direct injection"],
    0
  ),
  new Question(
    2,
    "What is TestNG?",
    ["API", "Test Framework", "Junit", "Browser"],
    1
  ),
  new Question(
    3,
    "What is the usecase for Maven?",
    ["Build lifecycle", "Project creation", "Testing", "Development"],
    0
  ),
  new Question(
    4,
    "Most Important feature of a framework?",
    ["Reporting", "screenshots", "analytics", "Video Recording"],
    0
  )
);

var user_answer_count = 0;
var questions_answered = 0;

do {
  var selected_question_index = select_random_question(total_questions);
  var selected_question = questions[selected_question_index];

  console.log(
    `${selected_question.question_num}: ${selected_question.question}`
  );

  var answers = selected_question.answers;
  // console.log(answers);
  for (var i = 0; i < answers.length; ++i) {
    console.log(`${i}: ${answers[i]}`);
  }

  var user_answer = prompt(
    "Please select the correct answer (just type the number). Enter exit to quit."
  );
  if (user_answer === "exit") break;
  is_answer_correct(selected_question, parseInt(user_answer));
} while (true);

function is_answer_correct(selected_question, user_answer) {
  ++questions_answered;
  const answer = selected_question.correct_answer;
  console.log(`You entered: ${user_answer}. Correct Answer: ${answer}.`);
  if (user_answer === answer) {
    console.log(
      `${++user_answer_count} of ${questions_answered} answered correctly!`
    );
  } else
    console.log(
      `${user_answer_count} of ${questions_answered} answered correctly!`
    );
}
 */

//// Suggested solution
// Use IIFE to limit the scope of the code.
(function () {
  function Question(question, answers, correct_answer) {
    this.question = question;
    this.answers = answers;
    this.correct_answer = correct_answer;
  }

  Question.prototype.display_question = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; ++i) {
      console.log(`${i}: ${this.answers[i]}`);
    }
  };

  Queestion.prototype.is_correct_answer = function (answer) {
    if (answer === this.correct_answer) {
      console.log("You've answered correctly");
    } else {
      console.log("You've answered incorrectly");
    }
  };

  var questions = new Array();
  var total_questions = questions.push(
    new Question(
      "How does selenium work?",
      ["Json Wire Protocol (JWP)", "Javascript", "Java", "Direct injection"],
      0
    ),
    new Question(
      "What is TestNG?",
      ["API", "Test Framework", "Junit", "Browser"],
      1
    ),
    new Question(
      "What is the usecase for Maven?",
      ["Build lifecycle", "Project creation", "Testing", "Development"],
      0
    ),
    new Question(
      "Most Important feature of a framework?",
      ["Reporting", "screenshots", "analytics", "Video Recording"],
      0
    )
  );

  function select_random_question_index(total_questions) {
    return Math.floor(Math.random() * total_questions);
  }

  const question_index = select_random_question_index(total_questions);
  questions[question_index].display_question();

  var answer = parseInt(
    prompt(
      "Please select the correct answer (just type the number). Enter exit to quit."
    )
  );

  questions(question_index).is_correct_answer(answer);
})();

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/
