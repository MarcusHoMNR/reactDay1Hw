import {
  DELETE_TODO_ITEMS,
  INIT_TODO_ITEMS,
  TOGGLE_DONE_TODO_ITEMS,
  UPDATE_TODO_ITEMS,
} from "../constant/constant";

const initState = { todoItems: [] };

const todoItemsReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_TODO_ITEMS:
      return { todoItems: [...state.todoItems, action.payload] };
    case INIT_TODO_ITEMS:
      return { todoItems: action.payload };
    case TOGGLE_DONE_TODO_ITEMS:
      return {
        todoItems: state.todoItems.map((todoItem) => {
          if (todoItem.id === action.payload.id) {
            return action.payload;
          }
          return todoItem;
        }),
      };

    case DELETE_TODO_ITEMS:
      return {
        todoItems: state.todoItems.filter(
          (todoItems) => todoItems.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default todoItemsReducer;
