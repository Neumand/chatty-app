import React, { Component } from 'react';

const Navbar = ({ userCount }) => {
  let user = '';
  userCount === 1 ? (user = 'user') : (user = 'users');
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-brand'>
        Chatty
      </a>
      <img
        className="navbar-brand"
        src='https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Misterious-512.png'
        alt='UFO'
      />
      <p className='navbar-online-users'>{`${userCount} online ${user}`}</p>
    </nav>
  );
};

export default Navbar;
