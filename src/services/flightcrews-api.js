import tokenService from '../services/tokenService';
const BASE_URL = '/api/flightcrews/';

export function create(flightcrew) {
    return fetch(BASE_URL, {
          method: "POST",
          headers: {
              'content-type': 'application/json', 
              'Authorization': `Bearer ${tokenService.getToken()}`
          },
          body: JSON.stringify(flightcrew)
    }, {mode: "cors"})
    .then(res => res.json());
  }


  export function update(flightcrew) {
  return fetch(`${BASE_URL}${flightcrew._id}`, {
		method: "PUT",
		headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
		body: JSON.stringify(flightcrew)
  }, {mode: "cors"})
  .then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
          method: 'DELETE',
          headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
  }