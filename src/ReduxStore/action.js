import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionType";

const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};
export const addTodoSuccess = (res) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: res,
  };
};
export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  };
};

export const getTodoLoading = () => ({
  type: GET_TODO_LOADING,
});
export const getTodoSuccess = (data) => ({
  type: GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoError = (data) => ({
  type: GET_TODO_ERROR,
  payload: data,
});

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export { addTodo, deleteTodo, editTodo };
