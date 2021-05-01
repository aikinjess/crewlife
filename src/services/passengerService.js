import tokenService from "./tokenService"
const BASE_URL = '/api/passengers/'

export function addPassenger(passengerData) {
    return fetch(BASE_URL, {
      headers: { 'content-type': 'application/json',
        Authorization: "Bearer " + tokenService.getToken() },
      method: 'POST',
      body: JSON.stringify(passengerData)
    },{mode: "cors" })
    .then(res => res.json())
  }

export function deleteOne(tripID, passengerID) {
    return fetch(`${BASE_URL}/${tripID}/${passengerID}`, {
      headers: { 'content-type': 'application/json',
        Authorization: "Bearer " + tokenService.getToken() },
      method: 'DELETE'
    },{mode: "cors"})
    .then(res => res.json());
  }

export function updatePassenger(passengerData) {
  console.log("service data", passengerData)
  return fetch(BASE_URL + passengerData.passengerId, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'PUT',
    body: JSON.stringify(passengerData)
  },{mode: "cors" })
  .then(res => res.json())
}