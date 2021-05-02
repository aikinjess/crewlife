const passenger = require('../models/passenger');
const Passenger = require('../models/passenger');

module.exports = {
  index,
  create,
  update,
  delete: deletePassenger,
  show,
}

function index(req, res) {
  try {
    Passenger.find({owner: req.user._id})
    .then((passengers) => {
      res.json(passengers)
    })
  } catch (error) {
    res.status(400).send({'err': err.errmsg});
  }
}

function create(req,res) {
  try {
    Passenger.create(req.body)
    .then(passenger => {
      res.json(passenger)
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

function update(req,res) {
  try {
    Passenger.findOne({_id: req.body.passengerID, owner: req.user._id})
    .then(passenger => {
      passenger.name = req.body.name;
      passenger.drink = req.body.drink;
      passenger.seatNo = req.body.seatNo;
      passenger.food = req.body.food;
      passenger.save()
      .then(passenger => {
        res.json(passenger)
      })
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

function deletePassenger(req,res) {
  try {
    Passenger.findByIdAndDelete(req.params.id)
    .then(passenger => {
      res.json(passenger)
    })
    .catch(err => {
      res.json(err.message)
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}


function show(req,res) {
  Passenger.findOne({_id: req.params.id, owner: req.user._id})
  .then(passenger => {
    res.json(passenger)
  })
  .catch(err => {
    res.status(400).send({'err': err.errmsg});
  })
}