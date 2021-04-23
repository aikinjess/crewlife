const Passenger = require('../models/passenger')

module.exports = {
  create,
  index,
  delete: deleteOne,
  update
}

function update(req, res) {
  Passenger.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(passenger => {res.json(passenger)})
  .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
  Passenger.findByIdAndDelete(req.params.id)
  .then(passenger => {res.json(passenger)})
  .catch(err => {res.json(err)})
}

function index(req, res) {
  Passenger.find({})
  .populate('addedBy')
  .then(passengers => {res.json(passengers)})
  .catch(err => {res.json(err)})
}

function create(req, res) {
  req.body.addedBy = req.user._id
  req.body.cast = req.body.cast.split(',');
  Passenger.create(req.body)
  .then(passenger => {res.json(passenger)})
  .catch(err => {res.json(err)})
}