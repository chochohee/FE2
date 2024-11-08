import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenseAction } from "../store/expense/expenseSlice";

export default function ExpenseInput() {
  const [expenseName, setExpenseName] = useState();
  const [expensePrice, setExpensePrice] = useState();

  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    dispatch(addExpenseAction({ name: expenseName, price: expensePrice }));
  };

  return (
    <form onSubmit={submit}>
      <label style={{ display: "block" }}>
        물건 이름:
        <input
          type="text"
          placeholder="예시: coffe"
          onChange={(event) => setExpenseName(event.target.value)}
        />
      </label>
      <label>
        물건 가격:
        <input
          type="number"
          placeholder="예시: 1000"
          onChange={(event) => setExpensePrice(Number(event.target.value))}
        />
      </label>
      <button type="submit">지출등록</button>
    </form>
  );
}
