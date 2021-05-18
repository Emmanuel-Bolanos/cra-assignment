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
    <div>
      {showHobbies ? <DisplayHobbies hobbies={hobbies}/> : 'Hobbies not allowed'}
      <p> {activeHobbies} </p>
    </div>
  )
}

export default Hobbies;
