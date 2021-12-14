import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup() {
  const todoItems = useSelector((state) => state.todoItems);
  return (
    <div>
      {todoItems.map((item, index) => {
        return <TodoItem item={item} key={item + index}></TodoItem>;
      })}
    </div>
  );
}
export default TodoGroup;
