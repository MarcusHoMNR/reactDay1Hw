import { useSelector } from "react-redux";

function UndoneList() {
  const allItems = useSelector((state) => state.todoItems);
  return (
    <div className="center">
      <h1>
        <span className="christmas-tree">🎄</span>
        <span className="title">Undone</span>
        <span className="christmas-tree">🎄</span>
      </h1>
      {allItems
        .filter((item) => !item.done)
        .map((item, index) => {
          return (
            <div key={item + index}>
              <span className={"todo-text"}>{item.text}</span>
            </div>
          );
        })}
    </div>
  );
}
export default UndoneList;
