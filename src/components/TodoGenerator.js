import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO_ITEMS } from "../constant/constant";
import { Button, Input } from "antd";
import { addTodoItem } from "../apis/todos";

function TodoGenerator() {
  const [submittedItemText, setSubmittedItemText] = useState("");
  const [editedTodoText, setEditedTodoText] = useState("");
  const dispatch = useDispatch();

  function onSubmitItem() {
    if (submittedItemText.trim() !== "") {
      addTodoItem({ text: submittedItemText.trim(), done: false }).then(
        (response) =>
          dispatch({
            type: ADD_TODO_ITEMS,
            payload: response.data,
          })
      );
    }
    setSubmittedItemText("");
  }

  return (
    <div className="add-todo-div">
      <Input
        type="text"
        id="submitInput"
        name="submitInput"
        value={submittedItemText}
        onChange={(event) => setSubmittedItemText(event.target.value)}
        className="add-todo-text"
      />
      <Button
        type="primary"
        onClick={onSubmitItem}
        className={
          submittedItemText.trim() === ""
            ? "add-todo-btn"
            : "add-todo-btn christmas-add-btn"
        }
        disabled={submittedItemText.trim() === ""}
      >
        add
      </Button>
    </div>
  );
}

export default TodoGenerator;
