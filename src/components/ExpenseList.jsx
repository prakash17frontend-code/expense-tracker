import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p>No expenses found</p>;
  }

  return (
    <div>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ExpenseList;