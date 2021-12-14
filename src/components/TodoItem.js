function TodoItem(props) {
  return (
    <div className="todo-item-row">
      <span style={{ fontSize: "20px" }}>{props.item}</span>
      <br />
    </div>
  );
}

export default TodoItem;
