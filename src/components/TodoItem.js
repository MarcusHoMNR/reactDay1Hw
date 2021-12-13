function TodoItem(props) {
  return (
    <div className="todoItemRow">
      <span>{[props.item]}</span>
      <br />
    </div>
  );
}

export default TodoItem;
