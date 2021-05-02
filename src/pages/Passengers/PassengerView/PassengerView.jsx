import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import * as passengerAPI from '../../../services/passengerService'
import PassengerDetails from '../../../components/PassengerDetails/PassengerDetails'
import EditPassenger from '../EditPassenger/EditPassenger'
import './PassengerView.module.css'

export default function PassengerView(props) {
    const {id} = useParams();
    const [passengerData, setPassengerData] = useState({})
    const [editPassenger, setEditPassenger] = useState(false)
  
    useEffect(() => {
      async function fetchData() {
        const passengerData = await passengerAPI.getOne(id);
        setPassengerData(passengerData)
      }
      fetchData();
    }, []);
  
        
    return (
      <>
        {editPassenger ? <EditPassenger setPassengerData={setPassengerData} passengerData={passengerData} setEditPassenger={setEditPassenger} /> 
        : <PassengerDetails passengerData={passengerData} setEditPassenger={setEditPassenger} /> }
      </>
    )
  };
  