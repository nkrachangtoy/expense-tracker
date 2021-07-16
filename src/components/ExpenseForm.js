import React from "react";
import TextField from "@material-ui/core/TextField";

const ExpenseForm = () => {
  return (
    <form className="add-expense__form">
      <TextField
        label="Transaction"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Type"
        select
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Date"
        select
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Amount"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <button className="add-expense__action">Add</button>
    </form>
  );
};

export default ExpenseForm;
