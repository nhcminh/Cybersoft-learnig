import { createStore, combineReducers } from "redux";
import glassesReducer from "./reducers/glasses";
const rootReducer = combineReducers({
  glassesReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
