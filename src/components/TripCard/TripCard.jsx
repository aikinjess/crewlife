import React from 'react';
import styles from './TripCard.css'

export default function TripCard({tripData, center}) {

  const departure = new Date(tripData.startDate).toLocaleDateString();
  const returnDate = new Date(tripData.endDate).toLocaleDateString();

  return (
      <div className={`${styles.box} ${center ? 'm-auto': ''}`}>
        <div className={styles.tripDetails}>
          <img src={tripData.imageSrc} alt=""/>
          <div className={styles.details}>
            <h1>Trip from {tripData.origin} to {tripData.destination}</h1>
            <p>
              Starts <strong>{departure}</strong><br />
              Ends <strong>{returnDate}</strong>
            </p>
          </div>
        </div>
      </div>
  )
}