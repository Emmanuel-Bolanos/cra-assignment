import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Sample title </h1>
        <Avatar />
      </div>
    );
  }
}

export default App;
