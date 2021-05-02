import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import * as crewAPI from '../../../services/crewService'
import CrewDetails from '../../../components/CrewDetails/CrewDetails'
import EditCrew from '../EditCrew/EditCrew'
import './CrewView.module.css'

export default function CrewView(props) {
    const {id} = useParams();
    const [crewData, setCrewData] = useState({})
    const [editCrew, setEditCrew] = useState(false)
  
    useEffect(() => {
      async function fetchData() {
        const crewData = await crewAPI.getOne(id);
        setCrewData(crewData)
      }
      fetchData();
    }, []);
  
        
    return (
      <>
        {editCrew ? <EditCrew setCrewData={setCrewData} crewData={crewData} setEditCrew={setEditCrew} /> 
        : <CrewDetails crewData={crewData} setEditCrew={setEditCrew} /> }
      </>
    )
  };
  