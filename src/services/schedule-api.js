import tokenService from '../services/tokenService'


export function create(schedule) {
    return fetch('/schedules', {
          method: "POST",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify(trip)
    }, {mode: "cors"})
    .then(res => res.json());
  }

export function getAll(schedules) {
    return fetch ('/schedules', {
        mode: 'cors'
    }).then(res => res.json(schedules))
}  

export function deleteTrip(id) {
    return fetch(`/schedules/${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    }, {mode: "cors"})
    .then(res => res.json())
    
}

export function update(schedule) {
    return fetch(`/schedules/${trip._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(schedule)
    }, {mode: "cors"})
    .then(res => res.json());
}