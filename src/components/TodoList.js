import { useState } from "react";
import SubmitTodoItem from "./SubmitTodoItem";
import TodoItemsList from "./TodoItemsList";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

  function updateTodoItems(item) {
    setTodoItems([...todoItems, item]);
  }

  return (
    <div className="center">
      <b style={{ marginTop: "10px" }}>Todo List:</b>
      <TodoItemsList todoItems={todoItems}></TodoItemsList>
      <SubmitTodoItem updateTodoItems={updateTodoItems}></SubmitTodoItem>
    </div>
  );
}

export default TodoList;
