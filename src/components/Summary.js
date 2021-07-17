import React from "react";
import Container from "./UI/Container";
import Chart from "./Chart/Chart.js";
import AddExpense from "./Expense/AddExpense";

const Summary = (props) => {
  const addExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpenseData(expenseData);
  };
  return (
    <Container className="summary">
      <Chart items={props.items} />
      <AddExpense onAddExpenseHandle={addExpenseHandler} />
    </Container>
  );
};

export default Summary;
