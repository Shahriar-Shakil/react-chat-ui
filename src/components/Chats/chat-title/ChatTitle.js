import React from "react";

import TrashIcon from "../controls/icons/trash-icon/TrashIcon";

import "./ChatTitle.scss";
import { useDispatch } from "react-redux";
import { conversationDeleted } from "../../../redux/chats/actions";

const ChatTitle = ({ selectedConversation }) => {
  let chatTitleContents = null;
  let dispatch = useDispatch();
  if (selectedConversation) {
    chatTitleContents = (
      <>
        <span>{selectedConversation.title}</span>
        <div
          onClick={() => dispatch(conversationDeleted())}
          title="Delete Conversation"
        >
          <TrashIcon />
        </div>
      </>
    );
  }

  return <div id="chat-title">{chatTitleContents}</div>;
};

export default ChatTitle;
