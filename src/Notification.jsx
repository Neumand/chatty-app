import React, { Component } from 'react';

const Notification = ({ notification }) => {
  return (
    <div className='message'>
      <span className='message system'>{notification}</span>
    </div>
  );
};

export default Notification;
