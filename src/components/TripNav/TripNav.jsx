import React from 'react';
import './TripNav.css'

export default function TripNav(props) {
  return (
    <div className='tripNav'>
      <div className={props.display==='schedules' ? 'active' : undefined}
        onClick={()=>props.switchDisplay('schedules')}>
        Schedule</div>
      <div className={props.display==='crew' ? 'active' : undefined}
        onClick={()=>props.switchDisplay('crew')}>
        Crew</div>
      <div className={props.display==='passengers' ? 'active' : undefined}
        onClick={()=>props.switchDisplay('passengers')}>
        Passengers</div>
    </div>
    
  )
}
