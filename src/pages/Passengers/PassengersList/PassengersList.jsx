import React from 'react';
import { UserContext } from '../../../components/UserContext'
import * as passengersAPI from '../../../services/passengerService'


export default function PassengerList ({tripData, tripID, setTripData, setPassengerId, setDisplay}) {

  const deletePassenger = async (passengerID) => {
    const result = await passengersAPI.deleteOne(tripID, passengerID);
    setTripData(result);
  }

  const editPassenger = (t) => {
    setDisplay('view');
    setPassengerId(t)
  }
  return (
    <>
      <h1>Passengers</h1>
      {tripData.passengers.length ?
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Seat #</th>
              <th>Drink</th>
              <th>Food</th>
              <th>Snack</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {tripData.passengers.map((passenger, idx) => (
              <tr>
                <td>{passenger.name}</td>
                <td>{passenger.seatNo}</td>
                <td>{passenger.drink}</td>
                <td>{passenger.food}</td>
                <td>{passenger.snack}</td>
                <td><button onClick={()=>deletePassenger(passenger._id)} >Delete</button></td>
                <td><button onClick={()=> editPassenger(idx)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      
      : <p>No Passengers</p>}
    </>
  );
}