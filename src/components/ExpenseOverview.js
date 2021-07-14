import React from "react";
import Card from "./Card";
import Container from "./Container";
import ExpenseItem from "./ExpenseItem";

const ExpenseOverview = () => {
  return (
    <Container>
      <h2>Track your expenses</h2>
      <p>Get summary of your monthly expenses</p>
      <Card>
        <ExpenseItem />
      </Card>
    </Container>
  );
};

export default ExpenseOverview;
