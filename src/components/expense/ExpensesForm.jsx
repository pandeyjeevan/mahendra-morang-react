import { useState } from "react";

export const ExpenseForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <>
      <form>
        <input
          type="number"
          placeholder="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <textarea placeholder="description" />

        <select>
          <option value="">Select Category</option>
          <option>Food and dining</option>
          <option>Transportation</option>
          <option>Shopping</option>
        </select>
        <input type="date" />

        <button>Add Expenses</button>
      </form>
    </>
  );
};
