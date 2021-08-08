import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {},
};

const accountInfo = createSlice({
  name: "accountInfo",
  initialState,
  reducers: {
    changAccountInfo(state, { payload }) {
      state.account = payload;
    },
  },
});
const { actions, reducer } = accountInfo;
export { actions as AccountInfoActions, reducer as AccountInfoReducer };
