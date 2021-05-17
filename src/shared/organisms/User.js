import React from 'react';
import './User.css';

function User(props) {
  const usrName = props.name || 'Name not available';
  const description = props.description || 'Description not available';
  const age = props.age || 'Age not available';
  const avatar = props.avatar || 'Avatar not available';
  return (
    <div className="userInfo">
      <h2> Sample text </h2>
      <p> {usrName} </p>
      <p> {description} </p>
      <p> {age} </p>
      <p> {avatar} </p>
    </div>
  )
}

export default User;