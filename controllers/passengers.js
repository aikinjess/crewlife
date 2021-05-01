const Trip = require('../models/trip')

module.exports = {
  create,
  update,
  delete: deletePassenger,
}

function create(req, res) {
  Trip.findById(req.body.tripID)
  .then(trip => {
    console.log(trip)
    console.log(req.body)
    trip.passengers.push(req.body)
    trip.save()
    .then(() => {
      res.json(trip)
    })
  })
}

function deletePassenger(req, res){
  Trip.findOne({_id: req.params.tripid, owner: req.user._id})  
  .then(trip => {
    const index = trip.passengers.findIndex(passenger=> passenger._id.equals(req.params.id))
    trip.passengers.splice(index, 1)
    trip.save()
    .then((trip) => {
      res.json(trip)
    })
  })
}

function update(req, res){
  Trip.findOne({_id: req.body.tripID, owner: req.user._id})
  .then(trip => {
    const index = trip.passengers.findIndex(passenger => passenger._id.equals(req.body.passengerId))
    trip.passengers[index] = req.body.passenger;
    trip.save()
    .then((trip) => {
      res.json(trip)
    })
  })
}
