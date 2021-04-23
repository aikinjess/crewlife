import React, { Component } from 'react';
import * as scheduleAPI from '../../services/scheduleApi'
import './ShowSchedule.css'

class ShowSchedule extends Component {
  state = {
    schedule: this.props.location.state.schedule,
  }

  async componentDidMount() {
    const schedule = await scheduleAPI.getResource(this.props.location.state.schedule._id);
    this.setState( [...schedule])
  }

  render() {
    const schedule = this.props.location.state.schedule;
    return (
      <div className="showSchedule">
        <div className="row scheduleLeft">
          <a href={schedule.url}>
            <h2 className="schedule-title">{schedule.title}</h2>
          </a>
          <div className="row">
            <p>Schedule: <br/>{schedule.description}</p>
          </div>
          <div className="row">
            <p>Tags: <br />{schedule.tag}</p>
            <button
              className="btn"
              onClick={() => this.props.handleAddToSavedItems(schedule)}
            >
              Save
            </button>
          </div>
      </div>
    </div>
    )
  }
}

export default ShowSchedule;
