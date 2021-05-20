import React, { Component } from 'react';
import User from './shared/organisms/User';
import Hobbies from './shared/organisms/Hobbies'
import './App.css';

function Avatar() {
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

const count = (arr) => {
  return arr.reduce((acc, obj) => {
    if (obj.isActive) acc++;
    return acc;
  }, 0);
}

const hobbies = [
  {name: 'Soccer', description: 'Some Description', isActive: true },
  {name: 'Racing', description: 'It was fun', isActive: false },
  {name: 'Gaming', description: 'I am playing Yakuza Zero and the story is great', isActive: true }
];

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1> Hobbie Network </h1>
        <div className="userCardContainer">
          {/* Full data */}
          <div className="userCard">
            <h2 className="marker">Full data demo</h2>
            <User 
              name = "Emmanuel Arturo"
              description = "Hello, this is my description"
              age = {age(1998)}
              avatar = {<Avatar />}
            />
            <Hobbies 
              hobbies={hobbies}
              showHobbies
              count={count}
            />
          </div>
          {/* Partial */}
          <div className="userCard">
            <h2 className="marker">Partial data demo</h2>
            <User 
              name = "John Doe"
              age = {age(1990)}
            />
            <Hobbies 
              hobbies={hobbies}
              count={count}
            />
          </div>
          {/* No data */}
          <div className="userCard">
            <h2 className="marker">No data demo</h2>
            <User />
            <Hobbies />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
