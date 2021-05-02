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

export function updateCrew(crewData) {
  return fetch(`${BASE_URL}${crewData.crewID}`, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'PUT',
    body: JSON.stringify(crewData)
  },{mode: "cors" })
  .then(res => res.json())
}


export function deleteCrew(crewID) {
  return fetch(`${BASE_URL}${crewID}`, {
    headers: { 'content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken() },
    method: 'DELETE',
  },{mode: "cors" })
  .then(res => res.json())
}