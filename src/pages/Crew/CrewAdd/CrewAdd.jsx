import React, { useState, useEffect, useRef } from 'react'
import { useForm } from '../../../hooks/useForm'
import * as crewAPI from '../../../services/crewService'

export default function AddCrew({tripID, setTripData, setDisplay}) {
  const [invalidForm, setValidForm] = useState(true);
  const [state, handleChange] = useForm({
      name: 'Name',
      phoneNo: '000-000-0000',
      role: '',
  })
  
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const crewData = {...state, tripID}
      const newTrip = await crewAPI.addCrew(crewData)
      console.log("newTrip", newTrip)
      setTripData(newTrip)
      setDisplay('list')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
  <>
    <h1>Add Crew</h1>
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
      <label>Phone # (required)
      <input
        name="phoneNo"
        value={state.phoneNo}
        onChange={handleChange}
        required
      /></label>
      <label>Price
      <input
        name="role"
        value={state.role}
        onChange={handleChange}
      /></label>
      <button
        type="submit"
        disabled={invalidForm}
      >
        Add Crew
      </button>
    </form>
  </div>
  </>
	)
}
