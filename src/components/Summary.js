import React from "react";
import Container from "./Container";
import Chart from "./Chart";
import AddExpense from "./AddExpense";

const Summary = () => {
  return (
    <Container className="summary">
      <Chart />
      <AddExpense />
    </Container>
  );
};

export default Summary;
