import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import * as tripAPI from '../../../services/tripService'
import ScheduleSection from '../../Schedules/ScheduleSection/ScheduleSection'
import TripNav from '../../../components/TripNav/TripNav'
import CrewSection from '../../Crew/CrewSection/CrewSection'
import PassengersSection from '../../Passengers/PassengersSection/PassengersSection'
import TripDetails from '../../../components/TripDetails/TripDetails'
import EditTrip from '../EditTrip/EditTrip'
import './TripView.css'

export default function TripView(props) {
    const {id} = useParams();
    const [tripData, setTripData] = useState({})
    const [display, setDisplay] = useState('schedules');
    const [editTrip, setEditTrip] = useState(false)
  
    useEffect(() => {
      async function fetchData() {
        const tripData = await tripAPI.getOne(id);
        setTripData(tripData)
      }
      fetchData();
    }, []);
  
    const displaySwitch = () => {
      switch(display) {
        case 'schedules':
          return (
            <main>
              <ScheduleSection setTripData={setTripData} tripID={id} tripData={tripData} />
            </main>)
        case 'crew':
          return (
            <main>
              <CrewSection setTripData={setTripData} tripID={id} tripData={tripData} />
            </main>
          )
          case 'passengers':
          return (
            <main>
               <PassengersSection setTripData={setTripData} tripID={id} itripData={tripData} />
            </main>
          )
      }
    }
        
    return (
      <>
        {editTrip ? <EditTrip setTripData={setTripData} tripData={tripData} setEditTrip={setEditTrip} /> 
        : <TripDetails tripData={tripData} setEditTrip={setEditTrip} /> }
        <TripNav switchDisplay={setDisplay} display={display} />
        {displaySwitch()}
      </>
    )
  };
  