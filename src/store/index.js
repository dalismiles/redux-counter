import { createStore, combineReducers } from "redux";

export const initialState = {
  count: {
    value: 0,
    default: 100,
  },
  user: {
    userName: "",
  },
};

function countReducer(state = {}, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "RANDOM_RESULT":
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ count: countReducer, user: userReducer });
const store = createStore(rootReducer, initialState);

export default store;
