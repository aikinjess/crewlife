import React, { useState } from 'react';
import PassengersAdd from '../PassengersAdd/PassengersAdd'
import PassengersList from '../PassengersList/PassengersList'
import PassengersEdit from '../PassengersEdit/PassengersEdit'

export default function PassengerSection(props) {
  const [display, setDisplay] = useState('list');
  const [passengerId, setPassengerId] = useState(0);

  const displaySwitch = () => {
    switch(display) {
      case 'add':
        return <PassengersAdd setDisplay={setDisplay} {...props}/>
      case 'view':
        return <PassengersEdit setDisplay={setDisplay} passengerId={passengerId} {...props} />
      case 'list':
      default:
        return <PassengersList setDisplay={setDisplay} setPassengerId={setPassengerId} {...props} />
    }
  }

  return (
    <>
      <div className='section-nav'>
        <div onClick={()=>setDisplay('list')}
          className={display === 'list' ? 'active' : undefined}>
          Passengers</div>
        <div onClick={()=>setDisplay('search')}
          className={display === 'search' ? 'active' : undefined}>
          Add Passengers</div>
      </div>
      {displaySwitch()}
    </>
  )
}