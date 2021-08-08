import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.jsx";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
