import tokenService from '../services/tokenService'
const BASE_URL = '/api/cards/'

export function create(card) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(card)
  }, {mode: "cors"})
  .then(res => res.json());
}

export function getMyCards(user) {
    return fetch(`${BASE_URL}${user._id}`, {mode: 'cors'})
    .then(res => res.json())
}

export function deleteCard(CardId) {
    console.log(CardId)
    return fetch(
      `${BASE_URL}${CardId}`,
      {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + tokenService.getToken(),
          },
      }, { mode: "cors" }
    ).then((res) => res.json());
}