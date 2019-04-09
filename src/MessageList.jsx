import React, { Component } from "react";
import Message from "./Message.jsx";

const MessageList = ({ messages }) => {
  const messageList = messages.map(message =>
    <Message key={message.id} content={message.content} username={message.username} />);
  return (
      <main>{messageList}</main>
  );
};

export default MessageList;
