import { useDispatch } from "react-redux";
import { Modal } from "antd";
import { deleteTodoItem, UpdateTodoItemValue } from "../apis/todos";
import {
  DELETE_TODO_ITEMS,
  UPDATE_TODO_ITEMS_VALUE,
} from "../constant/constant";
import "../style/TodoList.css";
import TextArea from "rc-textarea";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";

function TodoItem(props) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [editedTodoText, setEditedTodoText] = useState("");
  const disbaleBtn =
    editedTodoText.trim() === "" || editedTodoText.trim() === props.item.text;

  function openModal(event) {
    event.stopPropagation();
    setModalVisible(true);
    setEditedTodoText(props.item.text);
  }

  function onOk() {
    setModalVisible(false);
    if (editedTodoText.trim() !== "") {
      UpdateTodoItemValue({ ...props.item, text: editedTodoText.trim() }).then(
        (response) =>
          dispatch({
            type: UPDATE_TODO_ITEMS_VALUE,
            payload: response.data,
          })
      );
    }
  }

  function onCancel() {
    setModalVisible(false);
  }

  function handleToggleDone() {
    UpdateTodoItemValue({ ...props.item, done: !props.item.done }).then(
      (response) => {
        dispatch({ type: UPDATE_TODO_ITEMS_VALUE, payload: response.data });
      }
    );
  }

  function handleDeleteTodoList(event) {
    event.stopPropagation();

    deleteTodoItem(props.item.id).then((response) => {
      if (response.status === 204) {
        dispatch({
          type: DELETE_TODO_ITEMS,
          payload: props.item.id,
        });
      }
    });
  }

  return (
    <>
      <Modal
        title="Edit Todo Item"
        visible={modalVisible}
        onOk={onOk}
        onCancel={onCancel}
        okText="Confirm"
        cancelText="Cancel"
        okButtonProps={{
          disabled: disbaleBtn,
          className: disbaleBtn ? null : "christmas-confirm-btn",
          style: { backgroundColor: "green" },
        }}
      >
        <TextArea
          className="modal-text"
          placeholder="Edit Your Todo Item Here"
          value={editedTodoText}
          onChange={(event) => {
            event.stopPropagation();
            setEditedTodoText(event.target.value);
          }}
          style={{ width: " 100%" }}
        ></TextArea>
      </Modal>

      <div className="todo-item-row" onClick={handleToggleDone}>
        <span
          className={props.item.done ? "todo-text strike-through" : "todo-text"}
        >
          {props.item.text}
        </span>

        <span className="item-row-btn" onClick={openModal}>
          <EditOutlined />
        </span>
        <span className="item-row-btn" onClick={handleDeleteTodoList}>
          ✘
        </span>
      </div>
    </>
  );
}

export default TodoItem;
