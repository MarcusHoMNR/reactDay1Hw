import { useState } from "react";

function SubmitTodoItem(props) {
  const [submittedItem, setSubmittedItem] = useState("");

  function onSubmitItem() {
    setSubmittedItem(document.getElementById("submitInput").value);
    props.updateTodoItems(document.getElementById("submitInput").value);
  }

  return (
    <div>
      <input type="text" id="submitInput" name="submitInput" />
      <input type="submit" value="Submit" onClick={onSubmitItem}></input>
    </div>
  );
}

export default SubmitTodoItem;
