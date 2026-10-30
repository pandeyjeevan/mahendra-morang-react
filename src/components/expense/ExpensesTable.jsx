export const ExpenseTable = ({ expense }) => {
  return (
    <tr>
      <td>{expense.date}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>{expense.amount}</td>
    </tr>
  );
};
