import React,{ useState } from "react";
import "./NewExpense.css";




import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [editing,setEditing]=useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    setEditing(false);
  }

  const isEditingHandler = ( ) => setEditing(true);

  const stopEditingHandler = ( ) => setEditing(false);
  return (
    <div className="new-expense">
     {!editing  &&   <button onClick={isEditingHandler}>Add Expense</button>}
      {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
