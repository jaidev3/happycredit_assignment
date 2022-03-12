import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  TOGGLE_TODO,
} from "./actionType";

const initState = { loading: false, todos: [], errors: false };

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    // case ADD_TODO:
    //   return {
    //     ...state,
    //     todos: [...state.todos, payload],
    //   };
    case ADD_TODO_LOADING:
      return { ...state, loading: true };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        loading: false,
        errors: true,
      };

    case GET_TODO_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        error: true,
      };
    }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((e) => {
          return e.id !== payload;
        }),
      };

    case EDIT_TODO:
      return {};

    case TOGGLE_TODO:
      return {};

    default:
      return state;
  }
};

export { reducer };
