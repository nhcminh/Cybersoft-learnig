import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  film: {},
};

const selectedFilm = createSlice({
  name: "selectedFilm",
  initialState,
  reducers: {
    changeFilm(state, { payload }) {
      state.film = payload;
    },
  },
});
const { actions, reducer } = selectedFilm;
export { actions as SelectedFilmActions, reducer as SelectedFilmReducer };
