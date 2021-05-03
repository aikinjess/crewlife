import React, { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../../hooks/useForm'
import styles from './EditTrip.module.css'
import * as tripAPI from '../../../services/tripService'
import { UserContext } from '../../../components/UserContext'


export default function EditTrip({tripData, setEditTrip, setTripData}){
  const user = useContext(UserContext);
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [formData, handleChange] = useForm({
    startDate: tripData.startDate,
    origin: tripData.origin,
    destination: tripData.destination,
    departure: tripData.departure,
    flightAttendant1: tripData.flightAttendant1,
    flightAttendant2: tripData.flightAttendant2,
    pilot: tripData.pilot,
    firstOfficer: tripData.firstOfficer,
  })
  const [message, setMessage] = useState('');

  function getToday() {
    return new Date().toISOString().split('T')[0]
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const newData = {...formData, owner: user._id, tripID: tripData._id }
      const newTrip = await tripAPI.updateTrip(newData)
      setTripData(newTrip)
      setEditTrip(false);
    } catch (err) {
      setMessage(err.message)
    }
  }

  const deleteTrip = async (e) => {
    e.preventDefault();
    const result = await tripAPI.deleteTrip(tripData._id)
    history.push('/trip')
  }

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  return (
    <>
    <div className="whiteBox">
    <div className={styles.twoColumns}>
        <div className={`userForm ${styles.colOne}`}>
        
          <form 
            autoComplete="off"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            {message && <p>{message}</p>}
            <h2>Trip Details</h2>
            <label htmlFor="origin">Origin 
            <input
              type="text"
              autoComplete="off"
              value={formData.origin}
              name="origin"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="destination">Destination 
            <input
              type="text"
              autoComplete="off"
              value={formData.destination}
              name="destination"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="startDate">Start Date
            <input 
              type='date' 
              name='startDate'
              value={formData.startDate}
              onChange={handleChange}
              min={getToday()}
            /></label>
            <label htmlFor="departure">Departure(Military Time)
            <input 
              type="text"
              autoComplete="off"
              value={formData.departure}
              name="departure"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="scheduleDate">Arrival(Military Time)
            <input 
              type="text"
              autoComplete="off"
              value={formData.arrival}
              name="arrival"
              onChange={handleChange}
              required
            /></label>
            <h2>Crew</h2>
             <label htmlFor="flightAttendant1">Flight Attendant 1
            <input
              type="text"
              autoComplete="off"
              value={formData.flightAttendant1}
              name="flightattendant1"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="flightattendant2">Flight Attendant 2
            <input
              type="text"
              autoComplete="off"
              value={formData.flightAttendant2}
              name="flightattendant2"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="pilot">Pilot
            <input
              type="text"
              autoComplete="off"
              value={formData.pilot}
              name="pilot"
              onChange={handleChange}
              required
            /></label>
             <label htmlFor="firstOfficer">First Officer
            <input
              type="text"
              autoComplete="off"
              value={formData.firstOfficer}
              name="firstOfficer"
              onChange={handleChange}
              required
            /></label>
            <button className={styles.danger}
              onClick={deleteTrip}>
              Delete Trip</button>
            <div className={styles.buttons}>
            <button 
              onClick={()=>setEditTrip(false)}
              disabled={invalidForm}>
            Cancel</button>
            <button 
              onClick={handleSubmit}
              disabled={invalidForm}>
            Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}