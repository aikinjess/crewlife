import React from 'react';
import styles from './CrewCard.module.css'

export default function CrewCard({crewData, center}) {

  return (
      <div className={`${styles.box} ${center ? 'm-auto': ''}`}>
        <div className={styles.crewDetails}>
          <img src={crewData} alt=""/>
          <div className={styles.details}>
            <h1>{crewData.name}</h1>
            <p>
               <strong>{crewData.phoneNo}</strong><br />
               <strong>{crewData.role}</strong>
            </p>
          </div>
        </div>
      </div>
  )
}