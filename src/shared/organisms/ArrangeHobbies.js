import React from "react";

const hobbiesList = (hobbies) => {
  return hobbies.map((obj, i) => obj.isActive ?
    <div className="hobbieElement" key={i}>
      <li tabIndex="0"> {`I do ${obj.name}`} </li>
      <p className="hobbieDescription"> {obj.description} </p>
    </div>
    : <div className="hobbieElement" key={i}>
        <li tabIndex="0"> {`I used to do ${obj.name}`} </li>
        <p className="hobbieDescription"> {obj.description} </p>
      </div>
    
  )
};

const ArrangeHobbies = ({hobbies}) => {
  return (hobbies.length === 0) ? <p> No hobbies at the moment </p> 
    : <ul className="hobbies"> {hobbiesList(hobbies)} </ul>
};

export default ArrangeHobbies;
