import tokenService from "./tokenService"
const BASE_URL = '/api/trip/'

export function addTrip(tripData) {
  return fetch(BASE_URL, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'POST',
    body: JSON.stringify(tripData)
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

export function updateTrip(tripData) {
  return fetch(`${BASE_URL}${tripData.tripID}`, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'PUT',
    body: JSON.stringify(tripData)
  },{mode: "cors" })
  .then(res => res.json())
}


export function deleteTrip(tripID) {
  return fetch(`${BASE_URL}${tripID}`, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'DELETE',
  },{mode: "cors" })
  .then(res => res.json())
}