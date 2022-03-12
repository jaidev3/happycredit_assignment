import { SHOW_ITEM, SEARCH_ITEM, SORT_ITEM } from "./actionType";

const initState = { item: "" };

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SHOW_ITEM:
      return {
        ...state,
        item: payload,
      };
    case SEARCH_ITEM:
      return {
        ...state,
        item: payload,
      };
    case SORT_ITEM:
      return {
        ...state,
        item: payload,
      };

    default:
      return state;
  }
};

export { reducer };
