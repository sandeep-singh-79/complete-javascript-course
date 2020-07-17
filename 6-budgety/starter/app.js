// Steps:
// 1. Add event handler to the OK button - Controller module
// 2. Add the input value to the appropriate data structure for Income / Expense - Backend
// 3. Display the new item on the UI - UI module
//     3.1 Display income under Income head
//     3.2 Display expenses under Expenses head
//         3.2.1 Mouse over should display a remove button / isSecureContext
//         3.2.2 Expense as %age of Income
// 4. calculate budget - Backend module
// 5. Update the Budget fields UI - Ui module
//     5.1 If income > expenses then show a positive value
//     5.2 Show expenses total as %age of income

// Defining modules by using an IIFE & closures
// this simulates Model-View-Constroller
var budgetController = (function () {
  return {};
})();

var uiController = (function () {
  var DOM_elements = {
    input_type: ".add__type",
    input_desc: ".add__description",
    input_value: ".add__value",
    add_to_budget: ".add__btn",
  };
  return {
    // first method
    get_input_value: function () {
      return {
        type: document.querySelector(DOM_elements.input_type).value, // with be either 'inc' or 'exp'
        description: document.querySelector(DOM_elements.input_desc).value,
        amount: document.querySelector(DOM_elements.input_value).value,
      };
    },
    // second method
    get_DOM_elements: function () {
      return DOM_elements;
    },
  };
})();

// we are going to pass the other two controllers in to app_controller
// we use closures to return a value
var app_controller = (function (bdgtCtrlr, uiCtrlr) {
  var DOM_elements = uiController.get_DOM_elements();
  var ctrl_add_item = function () {
    // TODO: get text field value
    var input = uiCtrlr.get_input_value();
    console.log(input);
    // TODO: Add the value to budget controller
    // TODO: Add the value to the UI
    // TODO: calculate the budget
    // TODO: display the budget on the UI
  };

  // using the callback as there are no checks inside the anonymous function.
  document
    .querySelector(DOM_elements.add_to_budget)
    .addEventListener("click", ctrl_add_item);

  // add the keypress event listener to the global document.
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrl_add_item();
    }
  });
  // only way to access the variables/functions defined inside an IIFE
  return {};
})(budgetController, uiController);
