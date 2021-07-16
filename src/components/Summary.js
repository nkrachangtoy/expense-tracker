import React from "react";
import Container from "./UI/Container";
import Chart from "./Chart/Chart.js";
import AddExpense from "./Expense/AddExpense";

const Summary = () => {
  return (
    <Container className="summary">
      <Chart />
      <AddExpense />
    </Container>
  );
};

export default Summary;
