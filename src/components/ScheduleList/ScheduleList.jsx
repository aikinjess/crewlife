import React from "react";
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard'
import './ScheduleList.css'

const ScheduleList = (props) => {
  return (
    <>
      <h2 className="MySavedItems">My Schedules</h2>
      <div className="saved-schedules">
        {props.savedItems.map((schedule) => (
          <ScheduleCard
            handleDeleteSchedule={props.handleDeleteSchedule}
            schedule={schedule}
            user={props.user}
          />
        ))}
      </div>
    </>
  );
};

export default ScheduleList;