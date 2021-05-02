import React, { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../../hooks/useForm'
import styles from './EditCrew.module.css'
import * as crewAPI from '../../../services/crewService'
import { UserContext } from '../../../components/UserContext'


export default function EditCrew({crewData, setEditCrew, setCrewData}){
  const user = useContext(UserContext);
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
      const newData = {...formData, owner: user._id, crewID: crewData._id }
      const newCrew = await crewAPI.updateCrew(newData)
      setCrewData(newCrew)
      setEditCrew(false);
    } catch (err) {
      setMessage(err.message)
    }
  }

  const deleteCrew = async (e) => {
    e.preventDefault();
    const result = await crewAPI.deleteCrew(crewData._id)
    history.push('/crew')
  }

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  return (
    <>
    <div className="whiteBox">
    <h1>Edit Crew</h1>
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
            <button className={styles.danger}
              onClick={deleteCrew}>
              Delete Escape</button>
            <div className={styles.buttons}>
            <button 
              onClick={()=>setEditCrew(false)}
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