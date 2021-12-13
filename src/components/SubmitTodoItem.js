import { useState } from "react";

function SubmitTodoItem() {
  const [submittedItem, setSubmittedItem] = useState("");

  function onSubmitItem() {
    setSubmittedItem(document.getElementById("submitInput").value);
  }

  return (
    <div>
      {submittedItem}
      <input type="text" id="submitInput" name="submitInput" />
      <input type="submit" value="Submit" onClick={onSubmitItem}></input>
    </div>
  );
}

export default SubmitTodoItem;
