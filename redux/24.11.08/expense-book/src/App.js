import ExpenseInput from "./containers/ExpenseInput";
import ExpenseList from "./containers/ExpenseList";
import ExpenseTotal from "./containers/ExpenseTotal";
import InputIncome from "./containers/InputIncome";

function App() {
  return (
    <>
      <InputIncome />
      <ExpenseInput />
      <ExpenseTotal />
      <ExpenseList />
    </>
  );
}
export default App;
