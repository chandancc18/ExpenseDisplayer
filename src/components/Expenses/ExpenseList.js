import React from "react";
import ExpenseItem from "./ExpenseItems";
import "./ExpenseList.css";

function ExpenseList(props) {
  if (props.listItem.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        You saved Money, this month! No expenses Found!!
      </h2>
    );
  }

  return (
    <ul className="expenses-list ">
      {props.listItem.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
}

export default ExpenseList;
