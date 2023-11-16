import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  const user = useSelector((state) => {
    return state.auth
  })
  const isLogin = user.isAuthenticated;
  return (
    isLogin ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoute;