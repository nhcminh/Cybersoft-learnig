import { actionTypes } from "../actions/types";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ME:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
