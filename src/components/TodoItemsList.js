import { useEffect, useState } from "react";

function TodoItemsList(props) {
  const [todoItem, setTodoItem] = useState([]);
  useEffect(() => {
    setTodoItem(props.todoItems);
  }, [props.todoItems]);
  return (
    <div>
      {todoItem.map((item) => {
        return (
          <>
            <span>{item}</span>
            <br />
          </>
        );
      })}
    </div>
  );
}
export default TodoItemsList;
