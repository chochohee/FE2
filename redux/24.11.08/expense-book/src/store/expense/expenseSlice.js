import { createSlice, current } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
    income: 0,
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});
  
const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

export { expenseSlice, addExpenseAction, setIncomeAction };
