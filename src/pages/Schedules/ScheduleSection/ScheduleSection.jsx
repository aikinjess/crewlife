import React, { useState } from 'react';
import ScheduleAdd from '../ScheduleAdd/ScheduleAdd'
import ScheduleList from '../ScheduleList/ScheduleList'
import ScheduleEdit from '../../Schedules/ScheduleEdit/ScheduleEdit'

export default function ScheduleSection(props) {
  const [display, setDisplay] = useState('list');
  const [scheduleId, setScheduleId] = useState(0);

  const displaySwitch = () => {
    switch(display) {
      case 'add':
        return <ScheduleAdd setDisplay={setDisplay} {...props}/>
      case 'view':
        return <ScheduleEdit setDisplay={setDisplay} scheduleId={scheduleId} {...props} />
      case 'list':
      default:
        return <ScheduleList setDisplay={setDisplay} setScheduleId={setScheduleId} {...props} />
    }
  }

  return (
    <>
      <div className='section-nav'>
        <div onClick={()=>setDisplay('list')}
          className={display === 'list' ? 'active' : undefined}>
          My Schedule</div>
        <div onClick={()=>setDisplay('search')}
          className={display === 'search' ? 'active' : undefined}>
          Add Schedule</div>
      </div>
      {displaySwitch()}
    </>
  )
}