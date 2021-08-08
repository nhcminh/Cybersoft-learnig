import { actionTypes } from "../actions/types";

const inititalState = {
  courseList: [],
  courseDetail: null,
};

const reducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_COURSES:
      state.courseList = payload;
      return { ...state };

    case actionTypes.SET_COURSE_DETAIL:
      state.courseDetail = payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
