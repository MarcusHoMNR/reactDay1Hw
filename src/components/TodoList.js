import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "../style/Christmas.css";

function TodoList() {
  return (
    <div className="center">
      <h1>
        <span className="christmas-tree">🎄</span>
        <span className="todo-title">Todo List</span>
        <span className="christmas-tree">🎄</span>
      </h1>
      <TodoGroup></TodoGroup>
      <TodoGenerator></TodoGenerator>
    </div>
  );
}

export default TodoList;
