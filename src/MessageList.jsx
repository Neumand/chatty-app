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
        />
      );
    } else {
      return <Notification notification={message.content} />;
    }
  });
  return (
    <main>
      <h1 className="message-username">Welcome to the Chatty Community!</h1>
      {messageList}
    </main>
  );
};

export default MessageList;
