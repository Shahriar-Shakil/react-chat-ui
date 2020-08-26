import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  conversationChanged,
  newMessageAdded,
  conversationDeleted,
  conversationsRequested,
} from "../../../redux/chats/actions/index";
import ConversationSearch from "../../Chats/conversation/conversation-search/ConversationSearch";
import ConversationList from "../../Chats/conversation/conversation-list/ConversationList";
import NewConversation from "../../Chats/conversation/new-conversation/NewConversation";
import ChatTitle from "../../Chats/chat-title/ChatTitle";
import ChatForm from "../../Chats/chat-form/ChatForm";

import "./ChatShell.scss";
import NoConversations from "../../Chats/conversation/no-conversations/NoConversations";
import MessageList from "../message/MessageList";
import TranslateMessage from "../../Chats/translateMessage";

const ChatShell = () => {
  const dispatch = useDispatch();
  const conversations = useSelector(
    (state) => state.conversationState.conversations
  );
  const selectedConversation = useSelector(
    (state) => state.conversationState.selectedConversation
  );
  useEffect(() => {
    dispatch(conversationsRequested());
  }, []);
  const [translateMessage, setTranslateMessage] = useState({
    visible: false,
    message: "",
  });

  const handleTranslateMessage = ({ visible, message }) => {
    setTranslateMessage({ visible, message });
  };
  const handleTranslator = ({ visible, message }) => {
    setTranslateMessage({ visible, message });
  };

  let conversationContent = (
    <>
      <NoConversations></NoConversations>
    </>
  );

  if (conversations.length > 0) {
    conversationContent = (
      <>
        <MessageList
          translateMessage={handleTranslateMessage}
          conversationId={selectedConversation.id}
        />
      </>
    );
  }
  useEffect(() => {}, []);
  return (
    <div id="chat-container">
      <ConversationSearch conversations={conversations} />
      <ConversationList
        conversations={conversations}
        selectedConversation={selectedConversation}
      />
      <NewConversation />
      <ChatTitle
        selectedConversation={selectedConversation}
        // onDeleteConversation={onDeleteConversation}
      />
      {conversationContent}
      <TranslateMessage
        translateMessageProp={translateMessage}
        handleTranslator={handleTranslator}
      />
      <ChatForm
        selectedConversation={selectedConversation}
        // onMessageSubmitted={onMessageSubmitted}
      />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     conversations: state.conversationState.conversations,
//     selectedConversation: state.conversationState.selectedConversation,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   conversationChanged: (conversationId) =>
//     dispatch(conversationChanged(conversationId)),
//   onMessageSubmitted: (messageText) => {
//     dispatch(newMessageAdded(messageText));
//   },
//   onDeleteConversation: () => {
//     dispatch(conversationDeleted());
//   },
//   loadConversations: () => {
//     dispatch(conversationsRequested());
//   },
// });

export default ChatShell;
