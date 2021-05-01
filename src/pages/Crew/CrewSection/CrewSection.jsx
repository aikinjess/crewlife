import React, { useState } from 'react';
import CrewAdd from '../CrewAdd/CrewAdd'
import CrewList from '../CrewList/CrewList'
import CrewEdit from '../CrewEdit/CrewEdit'

export default function CrewSection(props) {
  const [display, setDisplay] = useState('list');
  const [crewId, setCrewId] = useState(0);

  const displaySwitch = () => {
    switch(display) {
      case 'add':
        return <CrewAdd setDisplay={setDisplay} {...props}/>
      case 'view':
        return <CrewEdit setDisplay={setDisplay} crewId={crewId} {...props} />
      case 'list':
      default:
        return <CrewList setDisplay={setDisplay} setCrewId={setCrewId} {...props} />
    }
  }

  return (
    <>
      <div className='section-nav'>
        <div onClick={()=>setDisplay('list')}
          className={display === 'list' ? 'active' : undefined}>
          Crew</div>
        <div onClick={()=>setDisplay('search')}
          className={display === 'search' ? 'active' : undefined}>
          Add Crew</div>
      </div>
      {displaySwitch()}
    </>
  )
}