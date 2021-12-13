import { useEffect, useState } from "react";

import TodoItem from "./TodoItem";

function TodoGroup(props) {
  const [todoItem, setTodoItem] = useState([]);
  useEffect(() => {
    setTodoItem(props.todoItems);
  }, [props.todoItems]);
  return (
    <div>
      {todoItem.map((item) => {
        return <TodoItem item={item}></TodoItem>;
      })}
    </div>
  );
}
export default TodoGroup;
