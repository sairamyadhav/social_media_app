import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div class="navbar">
        <div class="logo">Your Logo</div>
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
        </div>
        <div class="user-links">
            <a href="#">Profile</a>
            <a href="#">Logout</a>
        </div>
    </div>
  )
}

export default Navigation;