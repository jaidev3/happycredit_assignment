import { SHOW_ITEM, SEARCH_ITEM, SORT_ITEM } from "./actionType";

export const showItem = (data) => {
  return {
    type: SHOW_ITEM,
    payload: data,
  };
};

export const searchItem = (data) => {
  return {
    type: SEARCH_ITEM,
    payload: data,
  };
};

export const sortItem = (data) => {
  return {
    type: SORT_ITEM,
    payload: data,
  };
};
