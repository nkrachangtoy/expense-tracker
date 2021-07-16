import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";

const ExpenseForm = (props) => {
  const [values, setValues] = useState({
    transaction: "",
    type: "",
    date: "",
    amount: "",
  });

  const types = [
    {
      value: "Food",
    },
    {
      value: "Grocery",
    },
    {
      value: "Clothes",
    },
    {
      value: "Etc",
    },
  ];

  const valuesChangeHandler = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      transaction: values.transaction,
      type: values.type,
      date: new Date(values.date),
      amount: values.amount,
    };
    props.onSaveExpenseData(expenseData);
    setValues({
      transaction: "",
      type: "",
      date: "",
      amount: "",
    });
  };

  return (
    <form className="add-expense__form" onSubmit={submitHandler}>
      <TextField
        fullWidth
        label="Transaction"
        value={values.transaction}
        onChange={valuesChangeHandler("transaction")}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Type"
        fullWidth
        select
        value={values.type}
        onChange={valuesChangeHandler("type")}
        InputLabelProps={{
          shrink: true,
        }}
      >
        {types.map((type) => (
          <MenuItem key={type.value} value={type.value}>
            {type.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Date"
        fullWidth
        type="date"
        min="2021-01-01"
        max="2022-12-31"
        value={values.date}
        onChange={valuesChangeHandler("date")}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Amount"
        fullWidth
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        value={values.amount}
        onChange={valuesChangeHandler("amount")}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <button className="add-expense__action" type="submit">
        + Add
      </button>
    </form>
  );
};

export default ExpenseForm;
