import React from "react";
import TransactionList from "./TransactionList";

const ExpenseItem = () => {
  return (
    <div className="transaction-list">
      <h3 className="transaction-list__header">Transaction history</h3>
      <TransactionList />
    </div>
  );
};

export default ExpenseItem;
