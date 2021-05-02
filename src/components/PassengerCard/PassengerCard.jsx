import React from 'react';
import styles from './PassengerCard.module.css'

export default function PassengerCard({passengerData, center}) {

  return (
      <div className={`${styles.box} ${center ? 'm-auto': ''}`}>
        <div className={styles.passengerDetails}>
          <img src={passengerData} alt=""/>
          <div className={styles.details}>
            <h1>{passengerData.name}</h1>
            <p>
               <strong>{passengerData.seatNo}</strong><br />
               <strong>{passengerData.drink}</strong><br />
               <strong>{passengerData.food}</strong><br />
               <strong>{passengerData.snacko}</strong>
            </p>
          </div>
        </div>
      </div>
  )
}