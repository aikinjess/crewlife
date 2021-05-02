import React from 'react';
import { Link } from 'react-router-dom'
import styles from './PassengerDetails.module.css'

export default function PassengerDetails({passengerData, setEditPassenger}) {


  return (
      <div className={styles.box}>
        <div className={styles.twoColumns}>
      
          <div className={styles.colTwo}>
          <h1>{passengerData.name}</h1>
          <p>
               <strong>{passengerData.seatNo}</strong><br />
               <strong>{passengerData.drink}</strong><br />
               <strong>{passengerData.food}</strong><br />
               <strong>{passengerData.snacko}</strong>
            </p>
          
            <Link to='#' onClick={()=>setEditPassenger(true)}>Edit Details</Link>
          </div>
        </div>
      </div>
  )
}