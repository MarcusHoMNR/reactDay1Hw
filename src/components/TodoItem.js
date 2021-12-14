function TodoItem(props) {
  return (
    <div className="todoItemRow">
      <span style={{ fontSize: "20px" }}>{props.item}</span>
      <br />
    </div>
  );
}

export default TodoItem;
