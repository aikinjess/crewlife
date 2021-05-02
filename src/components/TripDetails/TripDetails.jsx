import React from 'react';
import { Link } from 'react-router-dom'
import styles from './TripDetails.module.css'

export default function TripDetails({tripData, setEditTrip}) {


  return (
      <div className={styles.box}>
        <div className={styles.twoColumns}>
      
          <div className={styles.colTwo}>
            <h1> {tripData.origin} to {tripData.destination}</h1>
          
            <Link to='#' onClick={()=>setEditTrip(true)}>Edit Details</Link>
          </div>
        </div>
      </div>
  )
}