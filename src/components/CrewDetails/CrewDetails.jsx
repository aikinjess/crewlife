import React from 'react';
import { Link } from 'react-router-dom'
import styles from './CrewDetails.module.css'

export default function CrewDetails({crewData, setEditCrew}) {


  return (
      <div className={styles.box}>
        <div className={styles.twoColumns}>
      
          <div className={styles.colTwo}>
          <h1>{crewData.name}</h1>
            <p>
               <strong>{crewData.phoneNo}</strong><br />
               <strong>{crewData.role}</strong>
            </p>
          
            <Link to='#' onClick={()=>setEditCrew(true)}>Edit Details</Link>
          </div>
        </div>
      </div>
  )
}