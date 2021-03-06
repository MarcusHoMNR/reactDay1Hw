import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "../style/Christmas.css";

function TodoList(props) {
  return (
    <div className="center ">
      <h1>
        <span className="christmas-tree">🎄</span>
        <span className="title">Todo List</span>
        <span className="christmas-tree">🎄</span>
      </h1>
      <TodoGenerator></TodoGenerator>
      <TodoGroup></TodoGroup>
    </div>
  );
}

export default TodoList;
