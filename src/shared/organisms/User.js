import React from 'react';
import './User.css';

function User({name, description, age, avatar}) {
  const usrName = name || 'Name not available';
  const usrDecription = description || 'Description not available';
  const usrAge = age || 'Age not available';
  const usrAvatar = avatar || 'Avatar not available';
  return (
    <div className="userInfoContainer">
      <p> {usrAvatar} </p>
      <div className="usrData">
        <h2> {usrName} </h2>
        <p> {usrDecription} </p>
        <p> Age: {usrAge} </p>
      </div>
    </div>
  )
}

export default User;