import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Menu, Dropdown } from "antd";

import "./Message.scss";

const Message = ({ isMyMessage, message, translateMessage }) => {
  const messageClass = classNames("message-row", {
    "you-message": isMyMessage,
    "other-message": !isMyMessage,
  });

  const imageThumbnail = isMyMessage ? null : (
    <img src={message.imageUrl} alt={message.imageAlt} />
  );

  const menu = (message) => {
    return (
      <Menu
        onClick={() =>
          translateMessage({ visible: true, message: message.trim() })
        }
      >
        <Menu.Item key="0">Translate Message</Menu.Item>
        <Menu.Item key="1">Forward</Menu.Item>
        <Menu.Item key="2">Copy</Menu.Item>
        <Menu.Item key="3">Remove</Menu.Item>
      </Menu>
    );
  };

  return (
    <div className={messageClass}>
      <div className="message-content">
        {imageThumbnail}
        <div className="message-text">{message.messageText}</div>
        {!isMyMessage && (
          <div className="options">
            <Dropdown
              overlay={() => menu(message.messageText)}
              trigger={"click"}
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faEllipsisV} />
              </a>
            </Dropdown>
          </div>
        )}
        <div className="message-time">{message.createdAt}</div>
      </div>
    </div>
  );
};

export default Message;
