const Trip = require('../models/trip');

module.exports = {
  index,
  create,
  update,
  delete: deleteTrip,
  show,
}

function index(req, res) {
  try {
    Trip.find({owner: req.user._id})
    .then((trips) => {
      res.json(trips)
    })
  } catch (error) {
    res.status(400).send({'err': err.errmsg});
  }
}

function create(req,res) {
  try {
    Trip.create(req.body)
    .then(trip => {
      res.json(trip)
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

function update(req,res) {
  try {
    Trip.findOne({_id: req.body.tripID, owner: req.user._id})
    .then(trip => {
      trip.departure = req.body.departure;
      trip.startDate = req.body.startDate;
      trip.arrival = req.body.arrival;
      trip.origin = req.body.origin;
      trip.destination = req.body.destination;
      trip.flightAttendant1 = req.body.flightAttendant1;
      trip.flightAttendant2 = req.body.flightAttendant2;
      trip.phoneNo = req.body.phoneNo;
      trip.pilot = req.body.pilot;
      trip.firstOfficer = req.body.firstOfficer;
      trip.passengerName = req.body.passengerName;
      trip.passengerSeatNo = req.body.passengerSeatNo;
      trip.passengerDrink = req.body.passengerDrink;
      trip.passengerFood = req.body.passengerFood;
      trip.save()
      .then(trip => {
        res.json(trip)
      })
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

function deleteTrip(req,res) {
  try {
    Trip.findByIdAndDelete(req.params.id)
    .then(trip => {
      res.json(trip)
    })
    .catch(err => {
      res.json(err.message)
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}


function show(req,res) {
  Trip.findOne({_id: req.params.id, owner: req.user._id})
  .then(trip => {
    res.json(trip)
  })
  .catch(err => {
    res.status(400).send({'err': err.errmsg});
  })
}