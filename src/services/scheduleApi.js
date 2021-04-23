import tokenService from "../services/tokenService";
const BASE_URL = "/api/resources/";

export function create(schedule) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(schedule)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getAll() {
  return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
}

export function getSchedule(id){
  return fetch(`${BASE_URL}${id}`,
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  },
  { mode: "cors" })
  .then((res) => res.json())
}

export function deleteFromSaved(scheduleId) {
  return fetch(
    `${BASE_URL}${resourceId}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getMySavedItems(user) {
  return fetch(`${BASE_URL}savedItems/${user._id}`, {
    mode: "cors",
  }).then((res) => res.json());
}

export function search(queryString) {
  return fetch(
    `${BASE_URL}search`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(queryString)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function addToSavedItems(schedule) {
  return fetch(
    `${BASE_URL}/mySchedules`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(schedule)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}