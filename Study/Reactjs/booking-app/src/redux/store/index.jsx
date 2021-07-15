import { createStore, combineReducers } from "redux";
import seatsListReducer from "../reducer/seatslist";
const rootReducer = combineReducers({
  seatsListReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
