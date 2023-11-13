import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div class="navbar">
        <div class="logo">Your Logo</div>
        <div class="nav-links">
            <NavLink to='/'>Home</NavLink>
            <a href="#">About</a>
            <a href="#">Services</a>
        </div>
        <div class="user-links">
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    </div>
  )
}

export default Navigation;