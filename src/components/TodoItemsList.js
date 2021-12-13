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
          <div className="todoItemRow">
            <span>{item}</span>
            <br />
          </div>
        );
      })}
    </div>
  );
}
export default TodoItemsList;
