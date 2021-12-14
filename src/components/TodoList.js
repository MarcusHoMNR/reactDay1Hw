import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList() {
  return (
    <div className="center">
      <h1>Todo List</h1>
      <TodoGroup></TodoGroup>
      <TodoGenerator></TodoGenerator>
    </div>
  );
}

export default TodoList;
