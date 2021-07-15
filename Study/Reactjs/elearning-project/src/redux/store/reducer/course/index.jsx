const initialState = {
  courseList: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COURSE":
      state.courseList = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
