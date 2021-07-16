import React from "react";
import Card from "../Utils/Card";
import Container from "../Utils/Container";
import ExpenseList from "./ExpenseList";
import Calendar from "../Utils/Calendar";
import Summary from "../Summary";

const ExpenseOverview = () => {
  return (
    <Container className="expense-overview__container">
      <h2 className="expense-overview__header">Track your expenses</h2>
      <p className="expense-overview__subheader">
        Get summary of your monthly expenses
      </p>
      <div className="expense-overview__main-content">
        <Card className="expense-overview__content-container">
          <Calendar />
          <ExpenseList />
        </Card>
        <Summary />
      </div>
    </Container>
  );
};

export default ExpenseOverview;
