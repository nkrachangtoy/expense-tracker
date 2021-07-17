import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandle(expenseData);
  };
  return (
    <Card className="add-expense">
      <div className="add-expense__header-container">
        <h3 className="add-expense__header">Add Expense</h3>
      </div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default AddExpense;
