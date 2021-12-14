import { useEffect, useState } from "react";

import TodoItem from "./TodoItem";

function TodoGroup(props) {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    setTodoItems(props.todoItems);
  }, [props.todoItems]);
  return (
    <div>
      {todoItems.map((item) => {
        return <TodoItem item={item}></TodoItem>;
      })}
    </div>
  );
}
export default TodoGroup;
