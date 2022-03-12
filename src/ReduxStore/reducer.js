import { SHOW_ITEM } from "./actionType";

const initState = { loading: false, song: "", errors: false };

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SHOW_ITEM:
      return {
        ...state,
        song: payload,
      };

    default:
      return state;
  }
};

export { reducer };
