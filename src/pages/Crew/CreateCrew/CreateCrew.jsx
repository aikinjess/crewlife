import React, { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../../hooks/useForm'
import styles from './CreateCrew.module.css'
import * as crewAPI from '../../../services/crewService'
import { UserContext } from '../../../components/UserContext'


export default function CreateCrew(props){
  const user = useContext(UserContext)
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [formData, handleChange] = useForm({
    name: '',
    phoneNo: '',
    role: '',
  })
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const crewData = {...formData, owner: user._id,}
      const newCrew = await crewAPI.addCrew(crewData)
      history.push("/crew/" + newCrew._id);
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
            <label htmlFor="origin">Name 
            <input
              type="text"
              autoComplete="off"
              value={formData.name}
              name="name"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="destination">Phone Number
            <input
              type="text"
              autoComplete="off"
              value={formData.phoneNo}
              name="phoneNo"
              onChange={handleChange}
              required
            /></label>
            <label htmlFor="role">Role
            <input 
               type="text"
               autoComplete="off"
               value={formData.role}
               name="role"
               onChange={handleChange}
               required
            /></label>
            <button 
              onClick={handleSubmit}
              disabled={invalidForm}>
            Add Crew</button>
          </form>
        </div>
      </div>\
    </div>
    </>

    
  )
}
