import React, { Component } from "react";

const ChatBar = ({ currentUser, addNewMessage }) => {
  // Event listener which fires when a user hits enter to submit a new message.
  const newMessage = e => {
    if (e.key === "Enter") {
      const messageContent = e.target.value;
      addNewMessage(messageContent);
      e.target.value = "";
    }
  };
  return (
    <footer className="chatbar">
      <input className="chatbar-username" defaultValue={currentUser} />
      <input
        type="text"
        className="chatbar-message"
        placeholder="Type a message and hit ENTER"
        onKeyDown={newMessage}
      />
    </footer>
  );
};

export default ChatBar;
