import React, { Component } from 'react';
import User from './shared/organisms/User';
import './App.css';

const Avatar = () => {
  return (
    <img 
      src="https://picsum.photos/id/1035/200"
      title="Sample user avatar"
      alt="Sample user avatar"
      className="usrAvatar"
    />
  )
};

const age = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

class App extends Component {
  render() {
    return (
      <div className="userCardContainer">
        {/* Full data */}
        <div className="userCard">
        <User 
          name = "Emmanuel Arturo"
          description = "Hello, this is my description"
          age = {age(1998)}
          avatar = {<Avatar />}
        />
        </div>
        {/* No data */}
        <div className="userCard">
          <User />
        </div>
      </div>
    );
  }
}

export default App;
