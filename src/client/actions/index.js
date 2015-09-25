/**
 * Actions
 */

export const ADD_ITEM = 'ADD_ITEM';
export function addItem (item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

let actions = {
  ADD_ITEM,
  addItem
};

export default actions;
