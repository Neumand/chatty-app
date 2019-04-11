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
          emoji={message.emoji}
        />
      );
    } else if (message.type === 'incomingGIF') {
      return (
        <Message
          key={message.id}
          content={
            <div>
              <div>{message.content.title}</div>
              <div>
                <img
                  src={message.content.imageUrl}
                  alt={message.content.title}
                />
              </div>
            </div>
          }
          username={message.username}
          emoji={message.emoji}
        />
      );
    } else {
      return <Notification key={message.id} notification={message.content} />;
    }
  });
  return (
    <main>
      <h1 className='message-username'>Welcome to the Chatty Community!</h1>
      {messageList}
    </main>
  );
};

export default MessageList;
