function TodoItem(props) {
  console.log(props.item);
  return (
    <div className="todoItemRow">
      <span style={{ fontSize: "20px" }}>{props.item}</span>
      <br />
    </div>
  );
}

export default TodoItem;
