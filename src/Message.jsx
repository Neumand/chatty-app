import React, { Component } from 'react';

const Message = ({ username, content }) => {
  return (
    <div>
      <div className='message'>
        <span className='message-username'>{username}</span>
        <span className='message-content'>{content}</span>
      </div>
      <div className='message system' />
    </div>
  );
};

export default Message;
