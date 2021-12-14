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
      <b style={{ marginTop: "10px", fontSize: "40px" }}>Todo List</b>
      <TodoGroup todoItems={todoItems}></TodoGroup>
      <TodoGenerator updateTodoItems={updateTodoItems}></TodoGenerator>
    </div>
  );
}

export default TodoList;
