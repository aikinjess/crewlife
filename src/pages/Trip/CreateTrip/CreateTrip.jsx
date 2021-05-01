import React, { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../../hooks/useForm'
import styles from './CreateTrip.css'
import * as tripAPI from '../../../services/tripService'
import { UserContext } from '../../../components/UserContext'


export default function CreateTrip(props){
  const user = useContext(UserContext)
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [formData, handleChange] = useForm({
    startDate: getToday(),
    endDate: getToday(),
    origin: '',
    destination: '',
  })
  const [message, setMessage] = useState('');

  function getToday() {
    return new Date().toISOString().split('T')[0]
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const tripData = {...formData, owner: user._id,}
      const newTrip = await tripAPI.addTrip(tripData)
      history.push("/trip/" + newTrip._id);
    } catch (err) {
      setMessage(err.message)
    }
  }

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  return (
    <>
    <div className="whiteBox">
    <h1>Trips</h1>
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
              min={getToday()}
            /></label>
            <label htmlFor="scheduleDate">End Date
            <input 
              type='date' 
              name='endDate'
              value={formData.endDate}
              onChange={handleChange}
              min={getToday()}
            /></label>
            <button 
              onClick={handleSubmit}
              disabled={invalidForm}>
            Add</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
