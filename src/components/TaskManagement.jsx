import { useState } from "react";

function TaskManagement() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(todos);

  //   0->learn react
  //   1->learn javascript
  //   2->learn Java

  //   todos = ["Learn React", "Learn useState", "practice JavaScript"];

  const addTodo = () => {
    if (todo === "") {
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const updatedeToods = todos.filter(
      (item, todoIndex) => todoIndex !== index,
    );
    setTodos(updatedeToods);
  };

  return (
    <>
      <h1>Task Management</h1>
      <input
        type="text"
        placement="enter a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((item, index) => (
        <>
          <p key={index}>{item}</p>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </>
      ))}

      {/* <h2>{todo}</h2> */}
    </>
  );
}

export default TaskManagement;
