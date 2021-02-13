import { combineReducers } from "redux";
//=======> IMPORTING THE SINGLE REDUCERS
import codeReducer from "./code/code.reducer";

export default combineReducers({
  code: codeReducer,
});
