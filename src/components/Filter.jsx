import React from "react";

function Filter({ selected, onChange }) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option>All</option>
      <option>Food</option>
      <option>Travel</option>
      <option>Shopping</option>
      <option>Others</option>
    </select>
  );
}

export default Filter;