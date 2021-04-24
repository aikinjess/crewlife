import React from 'react';
import { Link } from 'react-router-dom';

function PassengerCard({ passenger, handleDeletePassenger }) {
  return(
    <>
      <div className=" card">
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{passenger.name}<i className="material-icons right">close</i></span>
          <h6>Food:  {passenger.food}</h6>
          <h6>Drink: {passenger.drink}</h6>
          <div>Snack:  {passenger.snack}</div>
          <div>Cast: {tvshow.cast.join(', ')}</div>
          <>
            <button type="submit" className="btn red" onClick={() => handleDeletePassenger(passenger._id)}>
              <i className="material-icons left">delete</i>    
              Delete Passenger
            </button>
              <Link 
                className="btn yellow black-text"
                to={{
                  pathname: '/editPassenger',
                  state: {passenger}
                }}
              >
								<i className="material-icons left">build</i>
	              Edit Passenger
              </Link>
            </>
        </div>
      </div>
    </>
  ) 
}

export default PassengerCard;