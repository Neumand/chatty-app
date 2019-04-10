import React, { Component } from 'react';

const Navbar = ({ userCount }) => {
  let user = '';
  userCount === 1 ? user = 'user' : user = 'users';
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-brand'>
        Chatty
      </a>
      <p className='navbar-online-users'>{`${userCount} online ${user}`}</p>
    </nav>
  );
};

export default Navbar;
