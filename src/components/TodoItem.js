import { useDispatch } from "react-redux";
import {
  DELETE_TODO_ITEMS,
  TOGGLE_DONE_TODO_ITEMS,
} from "../constant/constant";
import "../style/TodoList.css";

function TodoItem(props) {
  const dispatch = useDispatch();

  function handleDeleteTodoList() {
    dispatch({ type: DELETE_TODO_ITEMS, payload: props.item.id });
  }

  function handleToggleDone() {
    dispatch({ type: TOGGLE_DONE_TODO_ITEMS, payload: props.item.id });
  }

  return (
    <div className="todo-item-row" onClick={handleToggleDone}>
      <span className={props.item.done ? "todo-text-done" : "todo-text"}>
        {props.item.text}
      </span>
      <span className="done-btn" onClick={handleDeleteTodoList}>
        ✘
      </span>
    </div>
  );
}

export default TodoItem;
