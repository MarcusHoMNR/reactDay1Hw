import TodoItem from "./TodoItem";

function TodoGroup(props) {
  return (
    <div>
      {props.todoItems.map((item) => {
        return <TodoItem item={item}></TodoItem>;
      })}
    </div>
  );
}
export default TodoGroup;
