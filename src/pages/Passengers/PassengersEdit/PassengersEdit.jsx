import React, { useState, useEffect, useRef } from 'react'
import { useForm } from '../../../hooks/useForm'
import * as passengerAPI from '../../../services/passengerService'

export default function PassengerEdit(props) {
  const passenger = props.tripData.passengers[props.passengerId]
  const [invalidForm, setValidForm] = useState(true);
  const [state, handleChange] = useForm({
      name: passenger?.name,
      seatNo: passenger?.seatNo,
      drink: passenger?.drink,
      food: passenger?.food,
      snack: passenger?.snack,
  })
    
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const passengerData = {passenger: state, tripID: props.tripID, passengerId: passenger._id}
      const newTrip = await passengerAPI.updatePassenger(passengerData)
      console.log("newTrip", newTrip)
      props.setTripData(newTrip)
      props.setDisplay('list')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
  <>
    <h1>Edit Passengers</h1>
    <div className="userForm">
    <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
      <label>Name (required)
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        required
      /></label>
        <label>Seat # (required)
        <input
          name="seatNo"
          value={state.seatNo}
          onChange={handleChange}
          required
        /></label>
        <label>Drink
        <input
          name="drink"
          value={state.drink}
          onChange={handleChange}
          required
        /></label>
        <label>Food
        <input
          name="food"
          value={state.food}
          onChange={handleChange}
          required
        /></label>
        <label>Snack
        <input
          name="snack"
          value={state.snack}
          onChange={handleChange}
          required
        /></label>
      <button
        type="submit"
        disabled={invalidForm}
      >
        Update Passengers
      </button>
    </form>
    </div>
  </>
	)
}