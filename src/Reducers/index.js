import { combineReducers } from "redux";
import userReducer from "./userReducer";
import showModal from "./showModal";
import ProfileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  showState: showModal,
  ProfileState: ProfileReducer,
});

export default rootReducer;
