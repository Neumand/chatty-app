import React, { Component } from 'react';

const Navbar = ({ userCount }) => {
  let user = '';
  userCount === 1 ? (user = 'user') : (user = 'users');
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-brand'>
        G-Chat
      </a>
      <img
        className="navbar-brand"
        src='https://cdn3.iconfinder.com/data/icons/transformers/network-service.png'
        alt='UFO'
      />
      <p className='navbar-online-users'>{`${userCount} online ${user}`}</p>
    </nav>
  );
};

export default Navbar;
