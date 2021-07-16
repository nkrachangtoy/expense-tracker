import React from "react";

const ExpenseList = () => {
  const transactions = [
    {
      id: "1",
      title: "Safeway",
      type: "Grocery",
      date: "July 12, 2021",
      amount: "$90.00",
    },
    {
      id: "2",
      title: "Movie",
      type: "Moive",
      date: "July 10, 2021",
      amount: "$30.00",
    },
    {
      id: "3",
      title: "Sushi",
      type: "Food",
      date: "July 11, 2021",
      amount: "$45.00",
    },
    {
      id: "4",
      title: "Save on food",
      type: "Grocery",
      date: "July 9, 2021",
      amount: "$32.00",
    },
    {
      id: "5",
      title: "Poutine",
      type: "Food",
      date: "July 5, 2021",
      amount: "$15.00",
    },
    {
      id: "6",
      title: "Utility",
      type: "Utility",
      date: "July 1, 2021",
      amount: "$150.00",
    },
  ];

  return (
    <div className="transaction-list">
      <h3 className="transaction-list__header">Transaction history</h3>
      <table className="transaction-list__table">
        <tr className="transaction-list__column">
          <th>Receiver</th>
          <th>Type</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {transactions.map((transaction) => (
          <tr className="transaction-list__row" key={transaction.title}>
            <td>{transaction.title}</td>
            <td>{transaction.type}</td>
            <td>{transaction.date}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ExpenseList;
