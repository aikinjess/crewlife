import React, { useState, useEffect, useRef } from 'react'
import { useForm } from '../../../hooks/useForm'
import * as passengerAPI from '../../../services/passengerService'

export default function AddPassenger({tripID, setTripData, setDisplay}) {
  const [invalidForm, setValidForm] = useState(true);
  const [state, handleChange] = useForm({
      name: 'Name',
      seatNo: 'A1',
      drink: '00',
      food: '',
      snack:'',


  })
  
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const passengerData = {...state, tripID}
      const newTrip = await passengerAPI.addPassenger(passengerData)
      console.log("newTrip", newTrip)
      setTripData(newTrip)
      setDisplay('list')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
  <>
    <h1>Add Passenger</h1>
    <div className="userForm">
    <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
      <label>Name (required)
      <input
        className="form-control"
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
      /></label>
        <label>Food
      <input
        name="food"
        value={state.food}
        onChange={handleChange}
      /></label>
        <label>Snack
      <input
        name="snack"
        value={state.snack}
        onChange={handleChange}
      /></label>
      <button
        type="submit"
        disabled={invalidForm}
      >
        ADD HOTEL
      </button>
    </form>
  </div>
  </>
	)
}