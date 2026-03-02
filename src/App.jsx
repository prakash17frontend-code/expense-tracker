import React, { useState, useMemo } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  // Add new expense
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  // Filter logic
  const filteredExpenses = useMemo(() => {
    if (filter === "All") return expenses;
    return expenses.filter((item) => item.category === filter);
  }, [expenses, filter]);

  // Total calculation
  const totalAmount = useMemo(() => {
    return expenses.reduce((sum, item) => sum + Number(item.amount), 0);
  }, [expenses]);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      <ExpenseForm onAddExpense={addExpense} />

      <Filter selected={filter} onChange={setFilter} />

      <h3>Total: ₹ {totalAmount}</h3>

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
      />
    </div>
  );
}

export default App;