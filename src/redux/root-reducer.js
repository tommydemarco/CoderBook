import { combineReducers } from "redux";
//=======> IMPORTING THE SINGLE REDUCERS
import codeReducer from "./code/user.reducer";

export default combineReducers({
  code: codeReducer,
});
