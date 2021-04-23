import React from 'react';
import '../Card/Card.css'

const Card = (props) => {
  return ( 
    <div className="flash-card back" onClick={props.handleClick}>
      {props.Card.backSide}
      <button
        type="submit"
        className="btn"
        onClick={() => props.handleDeleteCard(props.Card._id)}
      >
        Delete
      </button>
    </div>
   );
}
 
export default Card;
