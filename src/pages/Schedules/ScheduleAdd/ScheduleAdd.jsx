import React, { useState, useEffect, useRef } from 'react'
import { useForm } from '../../../hooks/useForm'
import * as scheduleAPI from '../../../services/scheduleService'

export default function AddSchedule({tripID, setTripData, setDisplay}) {
  const [invalidForm, setValidForm] = useState(true);
  const [state, handleChange] = useForm({
      origin: '',
      airport: '',
     desintation: '',
      airport: '',
      scheduleDateTime:'',


  })
  
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const scheduleData = {...state, tripID}
      const newTrip = await scheduleAPI.addSchedule(scheduleData)
      console.log("newTrip", newTrip)
      setTripData(newTrip)
      setDisplay('list')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
  <>
    <h1>Add Schedule</h1>
    <div className="userForm">
    <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
      <label>Origin (required)
      <input
        className="form-control"
        name="origin"
        value={state.origin}
        onChange={handleChange}
        required
      /></label>
      <label>Airport (required)
      <input
        name="airport"
        value={state.airport}
        onChange={handleChange}
        required
      /></label>
      <label>Destination
      <input
        name="destination"
        value={state.destination}
        onChange={handleChange}
      /></label>
        <label>Airport
      <input
        name="airport"
        value={state.airport}
        onChange={handleChange}
      /></label>
        <label>Departure Time
      <input
        name="scheduleDateTime"
        value={state.scheduleDateTime}
        onChange={handleChange}
      /></label>
      <button
        type="submit"
        disabled={invalidForm}
      >
        Add Schedule
      </button>
    </form>
  </div>
  </>
	)
}