import tokenService from "./tokenService"
const BASE_URL = '/api/schedule/'

export function addSchedule(scheduleData) {
    return fetch(BASE_URL, {
      headers: { 'content-type': 'application/json',
        Authorization: "Bearer " + tokenService.getToken() },
      method: 'POST',
      body: JSON.stringify(scheduleData)
    },{mode: "cors" })
    .then(res => res.json())
  }

export function deleteOne(tripID, scheduleID) {
    return fetch(`${BASE_URL}/${tripID}/${scheduleID}`, {
      headers: { 'content-type': 'application/json',
        Authorization: "Bearer " + tokenService.getToken() },
      method: 'DELETE'
    },{mode: "cors"})
    .then(res => res.json());
  }

export function updateSchedule(scheduleData) {
  console.log("service data", scheduleData)
  return fetch(BASE_URL + scheduleData.scheduleId, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'PUT',
    body: JSON.stringify(scheduleData)
  },{mode: "cors" })
  .then(res => res.json())
}

export function deleteSchedules(tripID, schedulesData) {
    if (!schedulesData.length) throw new Error('No schedule selected');
    return fetch(BASE_URL + tripID, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + tokenService.getToken(), 'content-type': 'application/json'},
        body: JSON.stringify({schedules: schedulesData})
    }, {mode: "cors"})
    .then(res => res.json())
}