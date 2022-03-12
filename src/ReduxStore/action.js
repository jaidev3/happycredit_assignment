import { SHOW_ITEM } from "./actionType";

export const playSong = (data) => {
  return {
    type: SHOW_ITEM,
    payload: data,
  };
};
