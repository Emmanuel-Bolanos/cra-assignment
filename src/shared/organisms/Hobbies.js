import React from 'react';
import ArrangeHobbies from './ArrangeHobbies';
import './Hobbies.css';

const Hobbies = (props) => {
  const hobbies = props.hobbies;
  const showHobbies = props.showHobbies;
  const activeHobbies = (props.count instanceof Function) ?
    `Active hobbies: ${props.count(hobbies)}`
    : 'Counting not available at the moment';

  return (
    <div>
      <ArrangeHobbies 
        showHobbies = {showHobbies}
        hobbies = {hobbies}
      />
      <p> {activeHobbies} </p>
    </div>
  )
}

export default Hobbies;
