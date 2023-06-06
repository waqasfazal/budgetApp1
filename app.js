// the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get  form elements
    var form = document.querySelector("form");
    // var recurringSelect = document.querySelector(".one select");
    var totalAmountInput = document.querySelector(".two input");
    var categorySelect = document.querySelector(".three select");
    var descriptionInput = document.querySelector(".four input");
    var paymentDateInput = document.querySelector(".five input");
    var addExpensesButton = document.querySelector("#btn-buget button");
    var budgetInput = document.getElementById("inputBudget");
    var setBudgetButton = document.querySelector("#budget button");
    var totalBudget = document.querySelector(".R1 p");
    var expenses = document.querySelector(".R2 p");
    var balance = document.querySelector(".R3 p");
    var remainingBudget = document.getElementById("RemainingBudget");
  
    var expenseList = [];
    var budget = 0;
    var expenseTotal = 0;
  
    // Add expenses event listener
    addExpensesButton.addEventListener("click", function (event) {
      event.preventDefault(); 
  
      var amount = parseFloat(totalAmountInput.value);
      var category = categorySelect.value;
      var description = descriptionInput.value;
      var paymentDate = paymentDateInput.value;
  
      // Validate inputs
      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }
  
      if (category === "") {
        alert("Please select a category.");
        return;
      }
  
      // Create an expense object
      var expense = {
        // recurring: recurring,
        amount: amount,
        category: category,
        description: description,
        paymentDate: paymentDate,
      };
  
      // Add the expense to the list
      expenseList.push(expense);
  
      // Update expense totals and UI
      expenseTotal += amount;
      updateExpenseUI();
  
      // Clear the form inputs
      totalAmountInput.value = "";
      categorySelect.selectedIndex = 0;
      descriptionInput.value = "";
      paymentDateInput.value = "";
    });
  
    // Set budget event listener
    setBudgetButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate input
      var newBudget = parseFloat(budgetInput.value);
      if (isNaN(newBudget) || newBudget <= 0) {
        alert("Please enter a valid budget amount.");
        return;
      }
  
      // Update budget and UI
      budget = newBudget;
      totalBudget.textContent = budget.toFixed(2);
      updateExpenseUI();
      budgetInput.value = "";
    });
  
    // Function to update the expense UI
    function updateExpenseUI() {
      expenses.textContent = expenseTotal.toFixed(2);
      balance.textContent = (budget - expenseTotal).toFixed(2);
      remainingBudget.textContent = (budget - expenseTotal).toFixed(2);
  
      if (budget - expenseTotal < 0) {
        remainingBudget.style.color = "red";
      } else {
        remainingBudget.style.color = "black";
      }
    }
  });
  