import React, { Component } from 'react';

const Message = ({ username, content, emoji }) => {
  return (
    <div>
      <div className='message'>
        <span className='message-username'>{username} {emoji}</span>
        <span className='message-content'>{content}</span>
      </div>
      <div className='message system' />
    </div>
  );
};

export default Message;
