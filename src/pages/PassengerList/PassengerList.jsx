import React, { useState, useEffect } from 'react'
import './PassengerList.css'
import * as passengerAPI from '../../services/passengers-api'
import PassengerCard from '../../components/PassengerCard/PassengerCard'

function PassengerList(props) {
  const [passengers, setPassengers] = useState([])

  async function handleDeletePassenger(id){
    await passengerAPI.deleteOne(id)
    setPassengers(passengers.filter(p => p._id !== id))
  }
  useEffect(() => {
    (async function(){
      const passengers = await passengerAPI.getAll();
      setPassengers(passengers);
    })();
  }, [])

  return (
    <>
      <div className='PassengerList-grid'>
        {passengers.map(passenger =>
          <PassengerCard
            key={passenger._id}
            passenger={passenger}
            user={props.user}
            handleDeletePassenger={handleDeletePassenger}
          />
        )}
      </div>
    </>
  );
}
 
export default PassengerList;