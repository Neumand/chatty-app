import React, { Component } from "react";

const ChatBar = ({ currentUser }) => {
  return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={currentUser} />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
        />
      </footer>
  );
}

export default ChatBar;