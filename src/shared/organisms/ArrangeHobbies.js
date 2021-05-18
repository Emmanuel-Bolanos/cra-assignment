const ArrangeHobbies = (props) => {
  return (props.showHobbies) ? 
  (props.hobbies === []) ? (<p> No hobbies at the moment </p>) :
  props.hobbies.map((obj, i) => {
    return obj.isActive ?
      <p key={i}> {`I do ${obj.name}.`} </p> 
      : <p key={i}> {`I used to do ${obj.name}.`} </p> 
  })
  : <p> Hobbies not allowed </p>;
}

export default ArrangeHobbies;
