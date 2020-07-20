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
  var Expense = function (id, description, amount) {
    this.id = id;
    this.description = description;
    this.amount = amount;
  };

  var Income = function (id, description, amount) {
    this.id = id;
    this.description = description;
    this.amount = amount;
  };

  var data = {
    items: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  var calculate_total = function (type) {
    sum = 0;
    data.items[type].forEach((element) => {
      sum += element.amount;
    });
    data.totals[type] = sum;
    return data.totals[type];
  };

  return {
    add_item: function (type, description, amount) {
      var new_item, ID;
      if (data.items[type].length > 0) {
        ID = data.items[type][data.items[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      new_item =
        type === "inc"
          ? new Income(ID, description, amount)
          : new Expense(ID, description, amount);
      data.items[type].push(new_item);
      return new_item;
    },
    delete_item: function (type, id) {
      var deleted_item, index;
      if (data.items[type].length > 0) {
        index = data.items[type]
          .map(function (element) {
            return element.id;
          })
          .indexOf(id);
        if (index !== -1) deleted_item = data.items[type].splice(index, 1);
      }
      return deleted_item;
    },
    calculate_budget: function () {
      calculate_total("exp");
      calculate_total("inc");
      data.budget = data.totals.inc - data.totals.exp;
      // calculate percentage only if the income is greater than 0
      // else return -1
      data.percentage =
        data.totals.inc > 0
          ? Math.round((data.totals.exp / data.totals.inc) * 100)
          : data.percentage;
    },
    get_budget: function () {
      return {
        budget: data.budget,
        total_income: data.totals.inc,
        total_expenses: data.totals.exp,
        percentage: data.percentage,
      };
    },
    testing: function () {
      return data;
    },
  };
})();

var uiController = (function () {
  var DOM_elements = {
    input_type: ".add__type",
    input_desc: ".add__description",
    input_value: ".add__value",
    add_to_budget: ".add__btn",
    income_container: ".income__list",
    expense_container: ".expenses__list",
    budget_inc_value: ".budget__income--value",
    budget_exp_value: ".budget__expenses--value",
    budget_exp_percentage: ".budget__expenses--percentage",
    budget_total: ".budget__value",
    container: ".container.clearfix",
  };
  return {
    // first method
    get_input_value: function () {
      return {
        type: document.querySelector(DOM_elements.input_type).value, // with be either 'inc' or 'exp'
        description: document.querySelector(DOM_elements.input_desc).value,
        amount: parseFloat(
          document.querySelector(DOM_elements.input_value).value
        ),
      };
    },
    // second method
    get_DOM_elements: function () {
      return DOM_elements;
    },
    add_list_item: function (type, item) {
      var html, ele;

      if (type === "inc") {
        html = `<div class="item clearfix" id="inc-${item.id}"> <div class="item__description">${item.description}</div> <div class="right clearfix"> <div class="item__value">+ ${item.amount}</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>`;
        ele = DOM_elements.income_container;
      } else if (type === "exp") {
        html = `<div class="item clearfix" id="exp-${item.id}"> <div class="item__description">${item.description}</div> <div class="right clearfix"> <div class="item__value">- ${item.amount}</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>`;
        ele = DOM_elements.expense_container;
      }

      // add the template to the page
      document.querySelector(ele).insertAdjacentHTML("beforeend", html);
      this.clear_fields();
    },
    clear_fields: function () {
      var to_clear = document.querySelectorAll(
        DOM_elements.input_desc + "," + DOM_elements.input_value
      );
      // querySelecterAll returns a list. This needs to be converted to an Array
      // we use Array slice method. We use call method and pass the list reference
      // This will enable the slice method to return an array
      to_clear_fields = Array.prototype.slice.call(to_clear);
      // here the anonymous function has access to the current element, the index
      // as well as the original array.
      to_clear_fields.forEach((element) => {
        element.value = "";
      });
      to_clear_fields[0].focus();
    },
    display_budget: function (budget_data) {
      document.querySelector(DOM_elements.budget_inc_value).textContent =
        "+" + budget_data.total_income;
      document.querySelector(DOM_elements.budget_exp_value).textContent =
        "-" + budget_data.total_expenses;
      document.querySelector(DOM_elements.budget_total).textContent =
        budget_data.budget;

      document.querySelector(DOM_elements.budget_exp_percentage).textContent =
        budget_data.percentage > 0 ? budget_data.percentage + "%" : "--";
    },
  };
})();

// we are going to pass the other two controllers in to app_controller
// we use closures to return a value
var app_controller = (function (bdgtCtrlr, uiCtrlr) {
  var setup_event_listeners = function () {
    var DOM_elements = uiController.get_DOM_elements();
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

    document
      .querySelector(DOM_elements.container)
      .addEventListener("click", delete_item);
  };

  var update_budget = function () {
    // calculate the budget
    bdgtCtrlr.calculate_budget();
    // return the budget
    var budget_data = bdgtCtrlr.get_budget();
    // display the budget on the UI
    uiCtrlr.display_budget(budget_data);
  };

  var ctrl_add_item = function () {
    var input, new_item;
    // get text field value
    input = uiCtrlr.get_input_value();

    if (input.description !== "" && !isNaN(input.amount) && input.amount > 0) {
      // Add the value to budget controller
      new_item = bdgtCtrlr.add_item(
        input.type,
        input.description,
        input.amount
      );
      // Add the value to the UI
      uiCtrlr.add_list_item(input.type, new_item);

      update_budget();
    }
  };
  var delete_item = function (event) {
    var id_to_delete, id_parts, deleted_item;
    // As the whole div needs to be deleted instead of the delete button. For this we need to capture the div parent
    id_to_delete = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (id_to_delete) {
      // first split the id to type and id
      id_parts = id_to_delete.split("-");
      // delete the item from DS
      deleted_item = bdgtCtrlr.delete_item(id_parts[0], parseInt(id_parts[1]));
      // delete the item from UI
      // update the budget and UI
      update_budget();
    }
  };
  // only way to access the variables/functions defined inside an IIFE
  return {
    // expose the eventlisteners to initialize the whole thing
    init: function () {
      uiCtrlr.display_budget({
        budget: 0,
        total_income: 0,
        total_expenses: 0,
        percentage: -1,
      });
      setup_event_listeners();
    },
  };
})(budgetController, uiController);

app_controller.init();
