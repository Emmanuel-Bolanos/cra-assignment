import React from 'react';
import './User.css';

// Default. In case the user does not provide an avatar
function NoAvatar() {
  return (
    <img 
      src="/defaultAvatar.png"
      title="Default Avatar"
      alt="Default Avatar"
      className="usrAvatar"
    />
  )
};

// reveives user data. Sets default values if there is missing info
function User({name, description, age, avatar}) {
  const usrName = name || 'Name not available';
  const usrDecription = description || 'Description not available';
  const usrAge = age || 'Age not available';
  const usrAvatar = avatar || <NoAvatar />;
  return (
    <div className="userInfoContainer">
      {usrAvatar}
      <div className="usrData">
        <h2> {usrName} </h2>
        <p> {usrDecription} </p>
        <p> Age: {usrAge} </p>
      </div>
    </div>
  )
}

export default User;