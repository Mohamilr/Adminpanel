import { combineReducers } from "redux";
import { userDataReducer } from "./reducers";

const allReducers = combineReducers({
  user: userDataReducer,
});

export default allReducers;
