import { combineReducers } from "redux";
import userReducer from "./userReducer";
import showModal from "./showModal";
import ProfileReducer from "./ProfileReducer";
import articleReducer from "./ArticleReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  showState: showModal,
  ProfileState: ProfileReducer,
  ArticleState: articleReducer,
});

export default rootReducer;
