function TodoGenerator(props) {
  function onSubmitItem() {
    if (document.getElementById("submitInput").value !== "") {
      props.updateTodoItems(document.getElementById("submitInput").value);
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
