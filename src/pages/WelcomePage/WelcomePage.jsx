import React from 'react';
import { Link } from 'react-router-dom'
import styles from './WelcomePage.module.css'


export default function WelcomePage(props) {
  return (
    <main id= "background">
      <div className={styles.welcomePage}>
       
     
       
  
        
        
      <h3><Link to='/trip/new'>Begin Your Trip</Link></h3>
      </div>
  </main>

  );
}