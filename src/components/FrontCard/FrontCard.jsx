import React from 'react';
import '../Card/Card.css';

const FrontCard = (props) => {
  return ( 
    <div className="card front" onClick={props.handleClick}>
      {props.Card.frontSide}
    </div>
   );
}
 
export default FrontCard;