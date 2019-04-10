import React, { Component } from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

const MessageList = ({ messages }) => {
  const messageList = messages.map(message => {
    if (message.type === 'incomingMessage') {
      return (
      <Message
        key={message.id}
        content={message.content}
        username={message.username}
      />)
    } else {
      return (
      <Notification
        notification={message.content}
      />)
    }
  });
  return <main>{messageList}</main>;
};

export default MessageList;
