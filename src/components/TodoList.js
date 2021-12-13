import SubmitTodoItem from "./SubmitTodoItem";
import TodoItemsList from "./TodoItemsList";

function TodoList() {
  return (
    <div>
      <TodoItemsList></TodoItemsList>
      <SubmitTodoItem></SubmitTodoItem>
    </div>
  );
}

export default TodoList;
