import React from "react";

const TransactionList = () => {
  const transactions = [
    {
      title: "Safeway",
      type: "Grocery",
      date: "July 12, 2021",
      amount: "$90.00",
    },
    {
      title: "Movie",
      type: "Moive",
      date: "July 10, 2021",
      amount: "$30.00",
    },
    {
      title: "Sushi",
      type: "Food",
      date: "July 11, 2021",
      amount: "$45.00",
    },
    {
      title: "Save on food",
      type: "Grocery",
      date: "July 9, 2021",
      amount: "$32.00",
    },
    {
      title: "Poutine",
      type: "Food",
      date: "July 5, 2021",
      amount: "$15.00",
    },
    {
      title: "Utility",
      type: "Utility",
      date: "July 1, 2021",
      amount: "$150.00",
    },
  ];

  return (
    <table className="transaction-list__table">
      <tr className="transaction-list__column">
        <th>Receiver</th>
        <th>Type</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
      {transactions.map((transaction) => (
        <tr className="transaction-list__row">
          <td>{transaction.title}</td>
          <td>{transaction.type}</td>
          <td>{transaction.date}</td>
          <td>{transaction.amount}</td>
        </tr>
      ))}
    </table>
  );
};

export default TransactionList;
