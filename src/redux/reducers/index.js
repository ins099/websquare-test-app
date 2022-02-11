import { combineReducers } from "redux";
import UserReducers from "./UserReducers";
import authenticateUser from "./authenticateUser";

const appReducer = combineReducers({
  UserReducers,
  authenticateUser,
});

export default appReducer;
