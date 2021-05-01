import React from 'react';
import { UserContext } from '../../../components/UserContext'
import * as schedulesAPI from '../../../services/scheduleService'


export default function ScheduleList ({tripData, tripID, setTripData, setScheduleId, setDisplay}) {

  const deleteSchedule = async (scheduleID) => {
    const result = await schedulesAPI.deleteOne(tripID, scheduleID);
    setTripData(result);
  }

  const editSchedule = (t) => {
    setDisplay('view');
    setScheduleId(t)
  }
  return (
    <>
      <h1>Schedule</h1>
      {tripData.schedules.length ?
        <table>
          <thead>
            <tr>
            <th>Origin</th>
            <th>Airport</th>
            <th>Destination</th>
            <th>Airport</th>
            <th>Departure Time</th>
            <th>Delete</th>
            <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {tripData.schedules.map((schedule, idx) => (
              <tr>
                 <td>{schedule.origin}</td>
                <td>{schedule.airport}</td>
                <td>{schedule.destination}</td>
                <td>{schedule.airport}</td>
                <td>{schedule.scheduleDateTime.split('T')[1].slice(0,5)}</td>
                <td><button onClick={()=>deleteSchedule(schedule._id)} >Delete</button></td>
                <td><button onClick={()=> editSchedule(idx)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      
      : <p>No Crew</p>}
    </>
  );
}