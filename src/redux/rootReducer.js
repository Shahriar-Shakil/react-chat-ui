import { combineReducers } from "redux";
import conversationState from "../redux/chats/reducers/conversations";
import messagesState from "../redux/chats/reducers/messages";

export default combineReducers({
  conversationState,
  messagesState,
});
