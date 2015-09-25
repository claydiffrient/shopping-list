import Actions from '../actions';

const itemHandlers = {
  [Actions.ADD_ITEM]: (state, action) => {
    let newState = state.slice();
    newState.push(action.payload);
    return newState;
  }
};

export default function items (state = [], action) {
  let handler = itemHandlers[action.type];
  if (handler) return itemHandlers(state, action);
  return state;
};
