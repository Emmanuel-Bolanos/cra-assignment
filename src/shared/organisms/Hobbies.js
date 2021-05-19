import React from 'react';
import ArrangeHobbies from './ArrangeHobbies';
import './Hobbies.css';

const DisplayHobbies = ({hobbies}) => {
  return (
    <ArrangeHobbies 
      hobbies = {hobbies}
      className="hobbieList"
    />
  );
}

const Hobbies = ({hobbies, showHobbies, count}) => {
  const activeHobbies = (count instanceof Function) ?
    `Active hobbies: ${count(hobbies)}`
    : '';

  return (
    <div className="hobbiesContainer">
      <p className="activeHobbies"> {activeHobbies} </p>
      {showHobbies ? <DisplayHobbies hobbies={hobbies}/> : 'Hobbies not allowed'}
    </div>
  )
}

export default Hobbies;
