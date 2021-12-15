import api from "./api";

export const getTodos = () => {
  return api.get("/todos");
};

export const addTodoItem = (item) => {
  return api.post("/todos", item);
};

export const UpdateTodoItemValue = (item) => {
  return api.put("/todos/" + item.id, item);
};

export const deleteTodoItem = (id) => {
  return api.delete("/todos/" + id);
};
