import React from 'react'
import './AddTrip.css'
import ScheduleCards from '../../../components/ScheduleCards/ScheduleCard'
import AddScheduleForm from "../../../components/AddScheduleForm/AddScheduleForm"
import Calendar from '../../../components/Calendar/Calendar'

function AddSchedules() {
    return (
        <div className='addScheduleBody'>
            <> 
            <h1 className='addSchedules'>Add Destination/Trip</h1>
            <div className='addSchedules'>
                <div className='addScheduleDates'>
                <AddScheduleForm/>
                <br/>
                <Calendar/>
                </div>
                <br/>
                <Scheduleards className='scheduleCards'/>
            </div>
            </>
        </div>
    )
}

export default AddSchedules