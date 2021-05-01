import React from 'react';
import { UserContext } from '../../../components/UserContext'
import * as crewsAPI from '../../../services/crewService'


export default function CrewList ({tripData, tripID, setTripData, setCrewId, setDisplay}) {

  const deleteCrew = async (crewID) => {
    const result = await crewsAPI.deleteOne(tripID, crewID);
    setTripData(result);
  }

  const editCrew = (t) => {
    setDisplay('view');
    setCrewId(t)
  }
  return (
    <>
      <h1>Crew</h1>
      {tripData.crews.length ?
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone #</th>
              <th>Role</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {tripData.crews.map((crew, idx) => (
              <tr>
                <td>{crew.name}</td>
                <td>{crew.phoneNo}</td>
                <td>{crew.role}</td>
                <td><button onClick={()=>deleteCrew(crew._id)} >Delete</button></td>
                <td><button onClick={()=> editCrew(idx)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      
      : <p>No Crew</p>}
    </>
  );
}