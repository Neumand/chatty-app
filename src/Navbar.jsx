import React, { Component } from 'react';

const Navbar = ({ userCount }) => {
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-brand'>
        Chatty
      </a>
      <p className='navbar-online-users'>{`${userCount} online users`}</p>
    </nav>
  );
};

export default Navbar;
