import React from 'react';
import styles from './TripCard.module.css'

export default function TripCard({tripData, center}) {

  const departure = new Date(tripData.startDate).toLocaleDateString();
  const returnDate = new Date(tripData.endDate).toLocaleDateString();

  return (
    <div className={`${styles.box2} ${center ? 'm-auto': ''}`}>
      <div className={`${styles.box} ${center ? 'm-auto': ''}`}>
        <div className={styles.tripDetails}>
          <div className={styles.details}>
            <h1> {tripData.origin} to {tripData.destination}</h1>
            <p>
            Starts <strong>{tripData.departure}</strong><br />
            </p>
          </div>
        </div>
      </div>
      </div>
  )
}