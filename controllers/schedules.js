const Trip = require('../models/trip')

module.exports = {
  create,
  update,
  delete: deleteSchedule,
}

function create(req, res) {
  Trip.findById(req.body.tripID)
  .then(trip => {
    console.log(trip)
    console.log(req.body)
    trip.schedules.push(req.body)
    Trip.save()
    .then(() => {
      res.json(trip)
    })
  })
}

function deleteSchedule(req, res){
  Trip.findOne({_id: req.params.tripid, owner: req.user._id})  
  .then(trip => {
    const index = trip.crews.findIndex(schedule => schedule._id.equals(req.params.id))
    trip.schedules.splice(index, 1)
    trip.save()
    .then((trip) => {
      res.json(trip)
    })
  })
}

function update(req, res){
  Trip.findOne({_id: req.body.tripID, owner: req.user._id})
  .then(trip => {
    const index = trip.schedules.findIndex(schedule => schedule._id.equals(req.body.scheduleId))
    trip.schedules[index] = req.body.schedule;
    trip.save()
    .then((trip) => {
      res.json(trip)
    })
  })
}
