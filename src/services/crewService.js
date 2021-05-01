import tokenService from "./tokenService"
const BASE_URL = '/api/crew/'

export function addCrew(crewData) {
    return fetch(BASE_URL, {
      headers: { 'content-type': 'application/json',
        Authorization: "Bearer " + tokenService.getToken() },
      method: 'POST',
      body: JSON.stringify(crewData)
    },{mode: "cors" })
    .then(res => res.json())
  }

export function deleteOne(tripID, crewID) {
    return fetch(`${BASE_URL}/${tripID}/${crewID}`, {
      headers: { 'content-type': 'application/json',
        Authorization: "Bearer " + tokenService.getToken() },
      method: 'DELETE'
    },{mode: "cors"})
    .then(res => res.json());
  }

export function updateCrew(crewData) {
  console.log("service data", crewData)
  return fetch(BASE_URL + crewData.crewId, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'PUT',
    body: JSON.stringify(crewData)
  },{mode: "cors" })
  .then(res => res.json())
}