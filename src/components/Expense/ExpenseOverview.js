import React, { useState } from "react";
import Card from "../UI/Card";
import Container from "../UI/Container";
import ExpenseList from "./ExpenseList";
import Calendar from "../UI/Calendar";
import Summary from "../Summary";

const ExpenseOverview = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      title: "Safeway",
      type: "Grocery",
      date: new Date("2021,07,12").toLocaleDateString(),
      amount: "90.00",
    },
    {
      id: "2",
      title: "Movie",
      type: "Moive",
      date: new Date("July 10, 2021").toLocaleDateString(),
      amount: "30.00",
    },
    {
      id: "3",
      title: "Sushi",
      type: "Food",
      date: new Date("July 11, 2021").toLocaleDateString(),
      amount: "45.00",
    },
    {
      id: "4",
      title: "Save on food",
      type: "Grocery",
      date: new Date("July 9, 2021").toLocaleDateString(),
      amount: "32.00",
    },
    {
      id: "5",
      title: "Poutine",
      type: "Food",
      date: new Date("July 5, 2021").toLocaleDateString(),
      amount: "15.00",
    },
    {
      id: "6",
      title: "Utility",
      type: "Utility",
      date: new Date("July 1, 2021").toLocaleDateString(),
      amount: "150.00",
    },
  ]);

  const addExpenseData = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  };

  return (
    <Container className="expense-overview__container">
      <h2 className="expense-overview__header">Track your expenses</h2>
      <p className="expense-overview__subheader">
        Get summary of your monthly expenses
      </p>
      <div className="expense-overview__main-content">
        <Card className="expense-overview__content-container">
          <Calendar />
          <ExpenseList items={expenses} />
        </Card>
        <Summary onAddExpenseData={addExpenseData} items={expenses} />
      </div>
    </Container>
  );
};

export default ExpenseOverview;
