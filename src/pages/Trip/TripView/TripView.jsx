import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import * as tripAPI from '../../../services/tripService'
import TripDetails from '../../../components/TripDetails/TripDetails'
import EditTrip from '../EditTrip/EditTrip'
import './TripView.module.css'

export default function TripView(props) {
    const {id} = useParams();
    const [tripData, setTripData] = useState({})
    const [editTrip, setEditTrip] = useState(false)
  
    useEffect(() => {
      async function fetchData() {
        const tripData = await tripAPI.getOne(id);
        setTripData(tripData)
      }
      fetchData();
    }, []);
  
        
    return (
      <>
        {editTrip ? <EditTrip setTripData={setTripData} tripData={tripData} setEditTrip={setEditTrip} /> 
        : <TripDetails tripData={tripData} setEditTrip={setEditTrip} /> }
      </>
    )
  };
  