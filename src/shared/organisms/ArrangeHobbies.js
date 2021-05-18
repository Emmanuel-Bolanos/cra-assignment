const hobbiesList = (hobbies) => {
  return hobbies.map((obj, i) => obj.isActive ?
    <li key={i}> {`I do ${obj.name}: ${obj.description}`} </li> 
    : <li key={i}> {`I used to do ${obj.name}: ${obj.description}`} </li> 
  )
};

const ArrangeHobbies = ({hobbies}) => {
  return (hobbies.length === 0) ? <p> No hobbies at the moment </p> 
    : <ul> {hobbiesList(hobbies)} </ul>
};

export default ArrangeHobbies;
