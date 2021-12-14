import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_TODO_ITEMS } from "../constant/constant";
import { v4 as uuidv4 } from "uuid";

function TodoGenerator() {
  const [submittedItem, setSubmittedItem] = useState("");
  const dispatch = useDispatch();

  function onSubmitItem() {
    if (submittedItem.trim() !== "") {
      dispatch({
        type: UPDATE_TODO_ITEMS,
        payload: { id: uuidv4(), text: submittedItem.trim(), done: false },
      });
      setSubmittedItem("");
    }
  }

  return (
    <div className="add-todo-div">
      <input
        type="text"
        id="submitInput"
        name="submitInput"
        value={submittedItem}
        onChange={(event) => setSubmittedItem(event.target.value)}
        className="add-todo-text"
      />
      <input
        type="submit"
        value="add"
        onClick={onSubmitItem}
        className="add-todo-btn"
      ></input>
    </div>
  );
}

export default TodoGenerator;
