import { all, call, fork } from "redux-saga/effects";

import { watchGetConversationsAsync } from "./chats/sagas/conversations";
import { watchGetMessagesAsync } from "./chats/sagas/messages";
function* rootSaga() {
  yield all([watchGetConversationsAsync(), watchGetMessagesAsync()]);
}

export default rootSaga;
