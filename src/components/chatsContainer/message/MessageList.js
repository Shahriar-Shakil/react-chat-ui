import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import Message from "../../Chats/message/Message";
import "./MessageList.scss";
import { messagesRequested } from "../../../redux/chats/actions";

const MessageList = ({
  conversationId,
  getMessagesForConversation,
  loadMessages,
  translateMessage,
}) => {
  const messageDetails = getMessagesForConversation(conversationId);
  const messages = messageDetails ? messageDetails.messages : null;
  let messageItems = null;

  useEffect(() => {
    if (!messageDetails) {
      loadMessages(conversationId, null);
    }
  }, [messageDetails, loadMessages, conversationId]);

  if (messages && messages.length > 0) {
    messageItems = messages.map((message, index) => {
      return (
        <Message
          key={index}
          isMyMessage={message.isMyMessage}
          message={message}
          translateMessage={translateMessage}
        />
      );
    });
  }

  return (
    <div id="chat-message-list">
      <> {messageItems}</>
    </div>
  );
};

const mapStateToProps = (state) => {
  const getMessagesForConversation = (conversationId) => {
    return state.messagesState.messageDetails[conversationId];
  };

  return {
    getMessagesForConversation,
  };
};

const mapDispatchToProps = (dispatch) => {
  const loadMessages = (conversationId, lastMessageId) => {
    dispatch(messagesRequested(conversationId, 5, lastMessageId));
  };

  return { loadMessages };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
