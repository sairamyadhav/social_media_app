import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const user = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div className='section'>
      <div className='bg-success left-section'>s</div>
      <div className='bg-success right-section'>a</div>

    </div>

  )
}

export default Profile;