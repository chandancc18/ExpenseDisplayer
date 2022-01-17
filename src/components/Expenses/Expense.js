import React ,{ useState } from "react";
import "../Expenses/css/Expense.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";


function Expense(props) {
  const [originalYear, setFilteredYear] = useState("2020");

  const filteredExpense = props.eArray.filter((expense) => {
       return expense.date.getFullYear().toString() === originalYear
  })

  const newYearHandler = (year) => {
    setFilteredYear(year);
    console.log(originalYear);
  };

 
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={originalYear}
          onChangeFilter={newYearHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpenseList listItem={filteredExpense} />
        
      </Card>
    </div>
  );
}

export default Expense;
