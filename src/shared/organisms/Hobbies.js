import React from 'react';
import ArrangeHobbies from './ArrangeHobbies';
import './Hobbies.css';

// 
const DisplayHobbies = ({hobbies, count}) => {
  return (
    <React.Fragment>
      <p className="hobbieState"> {count} </p>
      <ArrangeHobbies 
        hobbies = {hobbies}
        className="hobbieList"
      />
    </React.Fragment>
  );
}

// Receives user hobbies.
// if allowed to showHobbies, will return the active hobbies first.
const Hobbies = ({hobbies, showHobbies, count}) => {
  // validates that count is a function and uses it to count the active hobbies
  const activeHobbies = (count instanceof Function) ?
    `Active hobbies: ${count(hobbies)}`
    : '';

  return (
    <div className="hobbiesContainer">
      {showHobbies ? <DisplayHobbies 
        hobbies={hobbies}
        count={activeHobbies}
        /> 
        : 'Hobbies not allowed'}
    </div>
  )
}

export default Hobbies;
