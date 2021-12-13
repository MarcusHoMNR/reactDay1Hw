function TodoGenerator(props) {
  function onSubmitItem() {
    if (document.getElementById("submitInput").value !== "") {
      props.updateTodoItems(document.getElementById("submitInput").value);
    }
  }

  return (
    <div style={{ display: "flex", marginTop: "10px" }}>
      <input
        type="text"
        id="submitInput"
        name="submitInput"
        style={{ flexGrow: "1" }}
      />
      <input
        type="submit"
        value="add"
        onClick={onSubmitItem}
        style={{
          width: "15%",
          backgroundColor: "dodgerblue",
          color: "white",
          border: "none",
          marginLeft: "10px",
        }}
      ></input>
    </div>
  );
}

export default TodoGenerator;
