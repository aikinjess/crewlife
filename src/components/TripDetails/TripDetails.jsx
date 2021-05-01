import React from 'react';
import { Link } from 'react-router-dom'
import styles from './TripDetails.module.css'

export default function TripDetails({tripData, setEditTrip}) {

  const departure = new Date(tripData.startDate).toLocaleDateString();
  const returnDate = new Date(tripData.endDate).toLocaleDateString();

  return (
      <div className={styles.box}>
        <div className={styles.twoColumns}>
      
          <div className={styles.colTwo}>
            <h1>Trip from {tripData.origin} to {tripData.destination}</h1>
            <p>
              Starts <strong>{departure}</strong><br />
              Ends <strong>{returnDate}</strong><br />
              
            </p>
            <Link to='#' onClick={()=>setEditTrip(true)}>Edit Details</Link>
          </div>
        </div>
      </div>
  )
}