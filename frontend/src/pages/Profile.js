import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.auth);
    console.log(user);
  return (
    <div>{ user.username }</div>
  )
}

export default Profile;