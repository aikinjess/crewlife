import React, { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../../hooks/useForm'
import styles from './CreatePassenger.module.css'
import * as passengerAPI from '../../../services/passengerService'
import { UserContext } from '../../../components/UserContext'


export default function CreatePassenger(props){
  const user = useContext(UserContext)
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [formData, handleChange] = useForm({
    name: '',
    seatNo: '',
    drink: '',
    food: '',
    snack: '',
  })
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const passengerData = {...formData, owner: user._id,}
      const newPassenger = await passengerAPI.addPassenger(passengerData)
      history.push("/passenger/" + newPassenger._id);
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
    <div className={styles.twoColumns}>
        <div className={`userForm ${styles.colOne}`}>
          <form 
            autoComplete="off"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            {message && <p>{message}</p>}
            <label htmlFor="name">Name 
            <input
              type="text"
              autoComplete="off"
              value={formData.name}
              name="name"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="seatNo">Seat #
            <input
              type="text"
              autoComplete="off"
              value={formData.seatNo}
              name="seatNo"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="drink">Drink
            <input 
               type="text"
               autoComplete="off"
               value={formData.drink}
               name="drink"
               onChange={handleChange}
               required
            /></label>

            <label htmlFor="food">Food
            <input 
               type="text"
               autoComplete="off"
               value={formData.food}
               name="food"
               onChange={handleChange}
               required
            /></label>
            <button 
              onClick={handleSubmit}
              disabled={invalidForm}>
            Add Passenger</button>
          </form>
        </div>
      </div>
    </div>
    </>

    
  )
}
