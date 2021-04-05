import { combineReducers } from "redux";
import contactReducer from "./Contact/contactReducer";
import recentReducer from "./Recent/recentReducer";
import messageReducer from "./Message/messageReducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  recent: recentReducer,
  messages: messageReducer,
});

export default rootReducer;
