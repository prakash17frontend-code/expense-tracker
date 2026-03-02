import React from "react";

function ExpenseItem({ item, onDelete }) {
  return (
    <div className="expense-item">
      <div>
        <strong>{item.title}</strong>
        <p>₹ {item.amount}</p>
        <p>{item.category}</p>
        <p>{item.date}</p>
      </div>

      <button onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;