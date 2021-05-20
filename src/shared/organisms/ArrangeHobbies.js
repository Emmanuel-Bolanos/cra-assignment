import React from "react";

const hobbiesList = (hobbies) => {
  const activeHobbies = hobbies.map((obj, i) => obj.isActive &&
    <div className="hobbieElement" key={i}>
      <li tabIndex="0"> {obj.name} </li>
      <p className="hobbieDescription"> {obj.description} </p>
    </div>
  )
  const nonActiveHobbies = hobbies.map((obj, i) => !obj.isActive &&
    <div className="hobbieElement" key={i}>
      <li tabIndex="0"> {obj.name} </li>
      <p className="hobbieDescription"> {obj.description} </p>
    </div>
  )

  return (
    <React.Fragment>
      {activeHobbies}
      <p className="hobbieState"> Other hobbies: </p>
      {nonActiveHobbies}
    </React.Fragment>
  )
};

// Arranges the hobbies to show actives first.
// If there are no hobbies, a default message is returned instead.
const ArrangeHobbies = ({hobbies}) => {
  return (hobbies.length === 0) ? <p> No hobbies at the moment </p> 
    : <ul className="hobbies"> {hobbiesList(hobbies)} </ul>
};

export default ArrangeHobbies;
