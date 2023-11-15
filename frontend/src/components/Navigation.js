import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navbar">
        <div className="logo">Your Logo</div>
        <div className="nav-links">
            <NavLink to='/'>Home</NavLink>
            <a href="#">About</a>
            <a href="#">Services</a>
        </div>
        <div className="user-links">
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    </div>
  )
}

export default Navigation;