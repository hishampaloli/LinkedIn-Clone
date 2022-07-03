import { combineReducers } from "redux";
import userReducer from "./userReducer";
import showModal from "./showModal";

const rootReducer = combineReducers({
  userState: userReducer,
  showState: showModal,
});

export default rootReducer;
