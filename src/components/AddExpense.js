import React from "react";
import Card from "./Card";
import ExpenseForm from "./ExpenseForm";

const AddExpense = () => {
  return (
    <Card className="add-expense">
      <div className="add-expense__header-container">
        <h3 className="add-expense__header">Add Expense</h3>
      </div>
      <ExpenseForm />
    </Card>
  );
};

export default AddExpense;
