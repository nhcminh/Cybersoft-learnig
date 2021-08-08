import { combineReducers } from "redux";
import { SelectedFilmReducer } from "./slices/selectedFilm";
import { AccountInfoReducer } from "./slices/accountInfo";
const rootReducer = combineReducers({
  SelectedFilmReducer,
  AccountInfoReducer,
});

export default rootReducer;
