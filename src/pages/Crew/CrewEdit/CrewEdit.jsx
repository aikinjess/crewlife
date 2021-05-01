import React, { useState, useEffect, useRef } from 'react'
import { useForm } from '../../../hooks/useForm'
import * as crewAPI from '../../../services/crewService'

export default function CrewEdit(props) {
  const crew = props.tripData.crews[props.crewId]
  const [invalidForm, setValidForm] = useState(true);
  const [state, handleChange] = useForm({
      name: crew?.name,
      phoneNo: crew?.phoneNo,
      role: crew?.role,
  })
    
  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const crewData = {crew: state, tripID: props.tripID, crewId: crew._id}
    const newTrip = await crewAPI.updateCrew(crewData)
    console.log("newTrip", newTrip)
    props.setTripData(newTrip)
    props.setDisplay('list')
  } catch (err) {
    console.log(err.message)
  }
}


  return (
  <>
    <h1>Edit Crew</h1>
    <div className="userForm">
    <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
      <label>Name (required)
      <input
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
        <label>Role
        <input
          name="role"
          value={state.role}
          onChange={handleChange}
          required
        /></label>
      <button
        type="submit"
        disabled={invalidForm}
      >
        Update Crew
      </button>
    </form>
    </div>
  </>
	)
}

