import { useState } from "react";

function TodoGenerator(props) {
  const [submittedItem, setSubmittedItem] = useState("");
  function onSubmitItem() {
    if (submittedItem.trim() !== "") {
      props.updateTodoItems(submittedItem.trim());
      setSubmittedItem("");
    }
  }

  return (
    <div
      style={{ display: "flex", marginTop: "10px", justifyContent: "center" }}
    >
      <input
        type="text"
        id="submitInput"
        name="submitInput"
        value={submittedItem}
        onChange={(event) => setSubmittedItem(event.target.value)}
        style={{ width: "50%", borderRadius: "5px" }}
      />
      <input
        type="submit"
        value="add"
        onClick={onSubmitItem}
        style={{
          width: "9%",
          height: "45px",
          backgroundColor: "#1580eb",
          borderRadius: "5px",
          fontSize: "18px",
          color: "white",
          border: "none",
          marginLeft: "10px",
        }}
      ></input>
    </div>
  );
}

export default TodoGenerator;
