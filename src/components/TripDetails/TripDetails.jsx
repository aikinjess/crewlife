import React from 'react';
import { Link } from 'react-router-dom'
import styles from './TripDetails.module.css'

export default function TripDetails({tripData, setEditTrip}) {


  return (
      <div className={styles.box}>
        <div className={styles.twoColumns}>
      
          <div className={styles.colTwo}>
            <h1> {tripData.origin} to {tripData.destination}</h1>
            <p>Departure:{tripData.departure}</p>
            <p>Arrival:{tripData.arrival}</p>
            <p>Flight Attendant 1: {tripData.flightAttendant1}</p>
            <p>Flight Attendant 2: {tripData.flightAttendant2}</p>
            <p>Pilot: {tripData.pilot}</p>
            <p>First Officer: {tripData.firstOfficer}</p>
          
            <Link to='#' onClick={()=>setEditTrip(true)}>Edit Details</Link>
          </div>
        </div>
        
      </div>
  )
}