import React from "react";
import { Link } from "react-router-dom";
import "./ScheduleCard.css";

const ScheduleCard = ({ schedule, handleDeleteSchedule }) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <a href={schedule.url}>{schedule.title}</a>
          </span>
          <p> Description: {schedule.description}</p>
        </div>
        <div className="scheduleCardBtns">
          <div className="btn-div">
            <button className="btn grey lighten-1">
              <Link
                to={{
                  pathname: "/details",
                  state: { schedule },
                }}
              >
                Details
              </Link>
            </button>
          </div>
          <div className="btn-div"> 
            <button
              className="btn red lighten-2"
              type="submit"
              onClick={() => handleDeleteSchedule(schedule._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;