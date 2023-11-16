import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {logout} from '../slices/AuthSlice'


const Navigation = () => {
  const dispatch =  useDispatch()

  const isLogin = useSelector((state) => {
    return state.auth.isAuthenticated
  })
  return (
    <div className="navbar">
      <div className="logo">Your Logo</div>
      <div className="nav-links">
        <NavLink to='/'>Home</NavLink>
        <a href="#">About</a>
        <a href="#">Services</a>
      </div>
      {isLogin ? (<div className="user-links">
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/login' onClick={()=>{
          console.log('logout called')
          dispatch(logout())
          localStorage.clear()
        }}>Logout</NavLink>
      </div>) : (<div className="user-links">
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>)}
    </div>
  )
}

export default Navigation;