import { combineReducers } from "redux";
import { QuestionsReducer } from "./slices/questionsSlice";
const rootReducer = combineReducers({ QuestionsReducer });

export default rootReducer;
