import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

  function updateTodoItems(item) {
    setTodoItems([...todoItems, item]);
  }

  return (
    <div className="center">
      <h1>Todo List</h1>
      <TodoGroup todoItems={todoItems}></TodoGroup>
      <TodoGenerator updateTodoItems={updateTodoItems}></TodoGenerator>
    </div>
  );
}

export default TodoList;
