import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleTodoItemDone } from "../apis/todos";
import {
  DELETE_TODO_ITEMS,
  TOGGLE_DONE_TODO_ITEMS,
} from "../constant/constant";
import "../style/TodoList.css";

function TodoItem(props) {
  const dispatch = useDispatch();

  function handleDeleteTodoList(event) {
    event.stopPropagation();
    deleteTodoItem(props.item.id).then((response) =>
      dispatch({ type: DELETE_TODO_ITEMS, payload: response.data })
    );
  }

  function handleToggleDone() {
    toggleTodoItemDone({ ...props.item, done: !props.item.done }).then(
      (response) =>
        dispatch({ type: TOGGLE_DONE_TODO_ITEMS, payload: response.data })
    );
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
