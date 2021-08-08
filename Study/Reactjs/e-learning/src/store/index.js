import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import course from "./reducers/course";
import me from "./reducers/me";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  course,
  me,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
