const Trip = require('../models/trip')

module.exports = {
  create,
  update,
  delete: deleteCrew,
}

function create(req, res) {
  Trip.findById(req.body.itinID)
  .then(trip => {
    console.log(trip)
    console.log(req.body)
    trip.crews.push(req.body)
    Trip.save()
    .then(() => {
      res.json(trip)
    })
  })
}

function deleteCrew(req, res){
  Trip.findOne({_id: req.params.tripid, owner: req.user._id})  
  .then(trip => {
    const index = trip.crews.findIndex(crew => crew._id.equals(req.params.id))
    trip.crews.splice(index, 1)
    trip.save()
    .then((trip) => {
      res.json(trip)
    })
  })
}

function update(req, res){
  Trip.findOne({_id: req.body.tripID, owner: req.user._id})
  .then(trip => {
    const index = trip.crews.findIndex(crew => crew._id.equals(req.body.crewId))
    trip.crews[index] = req.body.crew;
    trip.save()
    .then((trip) => {
      res.json(trip)
    })
  })
}
