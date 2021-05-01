import React, { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../../hooks/useForm'
import styles from './EditTrip.css'
import * as tripAPI from '../../../services/tripService'
import { UserContext } from '../../../components/UserContext'


export default function EditTrip({tripData, setEditTrip, setTripData}){
  const user = useContext(UserContext);
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [formData, handleChange] = useForm({
    startDate: tripData.startDate.split('T')[0],
    endDate: tripData.endDate.split('T')[0],
    origin: tripData.origin,
    destination: tripData.destination,
  })
  const [message, setMessage] = useState('');

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
    <h1>Edit Trip</h1>
    <div className={styles.twoColumns}>
        <div className={styles.colOne}>
         
        </div>
        <div className={`userForm ${styles.colTwo}`}>
          <form 
            autoComplete="off"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            {message && <p>{message}</p>}
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
            <label htmlFor="scheduleDate">Start Date
            <input 
              type='date' 
              name='startDate'
              value={formData.startDate}
              onChange={handleChange}
            /></label>
            <label htmlFor="scheduleDate">End Date
            <input 
              type='date' 
              name='endDate'
              value={formData.endDate}
              onChange={handleChange}
            /></label>
            <button className={styles.danger}
              onClick={deleteTrip}>
              Delete Escape</button>
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