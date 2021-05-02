import React, { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../../hooks/useForm'
import styles from './EditPassenger.module.css'
import * as passengerAPI from '../../../services/passengerService'
import { UserContext } from '../../../components/UserContext'


export default function EditPassenger({passengerData, setEditPassenger, setPassengerData}){
  const user = useContext(UserContext);
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
      const newData = {...formData, owner: user._id, passengerID: passengerData._id }
      const newPassenger = await passengerAPI.updatePassenger(newData)
      setPassengerData(newPassenger)
      setEditPassenger(false);
    } catch (err) {
      setMessage(err.message)
    }
  }

  const deletePassenger = async (e) => {
    e.preventDefault();
    const result = await passengerAPI.deletePassenger(passengerData._id)
    history.push('/passenger')
  }

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  return (
    <>
    <div className="whiteBox">
    <h1>Edit Passenger</h1>
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
                        <label htmlFor="snack">Snack
            <input 
               type="text"
               autoComplete="off"
               value={formData.snack}
               name="role"
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
            <button className={styles.danger}
              onClick={deletePassenger}>
              Delete Escape</button>
            <div className={styles.buttons}>
            <button 
              onClick={()=>setEditPassenger(false)}
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