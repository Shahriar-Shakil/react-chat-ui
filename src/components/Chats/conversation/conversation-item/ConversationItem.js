import React from "react";
import classNames from "classnames";

import "./ConversationItem.scss";
import { useDispatch } from "react-redux";
import { conversationChanged } from "../../../../redux/chats/actions";

const ConversationItem = ({ conversation, isActive }) => {
  const dispatch = useDispatch();
  const className = classNames("conversation", {
    active: isActive,
  });

  const handleConversationChanged = (conversationId) => {
    dispatch(conversationChanged(conversationId));
  };
  return (
    <div
      className={className}
      onClick={() => handleConversationChanged(conversation.id)}
    >
      <img src={conversation.imageUrl} alt={conversation.imageAlt} />
      <div className="title-text">{conversation.title}</div>
      <div className="created-date">{conversation.createdAt}</div>
      <div className="conversation-message">
        {conversation.latestMessageText}
      </div>
    </div>
  );
};

export default ConversationItem;
