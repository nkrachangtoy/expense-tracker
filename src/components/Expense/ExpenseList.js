import React from "react";

const ExpenseList = (props) => {
  const expenses = props.items;

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
        <tbody>
          {expenses.map((expense) => (
            <tr className="transaction-list__row" key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.type}</td>
              <td>{expense.date}</td>
              <td>${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
