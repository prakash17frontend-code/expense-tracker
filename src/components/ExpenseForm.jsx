import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!amount || Number(amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (!date) {
      newErrors.date = "Date is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
      date,
    };

    onAddExpense(newExpense);

    // Reset form
    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {errors.amount && <p className="error">{errors.amount}</p>}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Others</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {errors.date && <p className="error">{errors.date}</p>}

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;