import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  questions: [],
  answers: [],
};
export const fetchQuestion = createAsyncThunk("fetchQuestion", async () => {
  const response = await axios.get(
    "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions"
  );
  return response.data;
});
const questions = createSlice({
  name: "questionsSlice",
  initialState,
  reducers: {
    getAnswer(state, action) {
      state.answers.length < 8
        ? state.answers.push(action.payload)
        : (state.answers.find((ans) => ans.id === action.payload.id).answers =
            action.payload.answers);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestion.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

const { actions, reducer } = questions;
export { actions as QuestionActions, reducer as QuestionsReducer };
