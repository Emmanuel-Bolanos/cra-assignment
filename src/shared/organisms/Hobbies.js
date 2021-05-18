import React from 'react';
import ArrangeHobbies from './ArrangeHobbies';
import './Hobbies.css';

const DisplayHobbies = ({showHobbies, hobbies}) => {
  return (
    <ArrangeHobbies 
      showHobbies = {showHobbies}
      hobbies = {hobbies}
    />
  );
}

const Hobbies = ({hobbies, showHobbies, count}) => {
  const activeHobbies = (count instanceof Function) ?
    `Active hobbies: ${count(hobbies)}`
    : '';

  return (
    <div className="hobbiesContainer">
      <p> {activeHobbies} </p>
      {showHobbies ? <DisplayHobbies hobbies={hobbies}/> : 'Hobbies not allowed'}
    </div>
  )
}

export default Hobbies;
