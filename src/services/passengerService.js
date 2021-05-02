import tokenService from "./tokenService"
const BASE_URL = '/api/passenger.'

export function addPassenger(passengerData) {
  return fetch(BASE_URL, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'POST',
    body: JSON.stringify(passengerData)
  },{mode: "cors" })
  .then(res => res.json())
}

export function getAll(userId) {
  return fetch(BASE_URL + userId, {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  })
  .then(res => res.json());
}

export function getOne(id) {
  return fetch(BASE_URL + 'show/' + id, {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  })
  .then(res => res.json())
}

export function updatePassenger(passengerData) {
  return fetch(`${BASE_URL}${passengerData.passengerID}`, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'PUT',
    body: JSON.stringify(passengerData)
  },{mode: "cors" })
  .then(res => res.json())
}


export function deletePassenger(passengerID) {
  return fetch(`${BASE_URL}${passengerID}`, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'DELETE',
  },{mode: "cors" })
  .then(res => res.json())
}