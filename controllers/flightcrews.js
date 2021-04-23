const Flightcrew = require('../models/flightcrew')

module.exports = {
  create,
  index,
  delete: deleteOne,
  update,
}

function update(req,res) {
  Schedule.findByIdAndUpdate(req.params.id, req.body)
  .then(flightcrew => {res.json(flightcrew)})
  .catch(err => {res.json(err)})
}

function deleteOne(req,res) {
  Flightcrew.findByIdAndDelete(req.params.id)
  .then(flightcrew => {res.json(flightcrew)})
  .catch(err => {res.json(err)})
}

function index(req,res) {
  Flightcrew.find([])
  .then(flightcrews => {res.json(flightcrews)})
  .catch(err => {res.json(err)})
}

function create(req, res) {
    req.body.addedBy = req.user._id
    Flightcrew.create(req.body)
    .then(flightcrew => {res.json(flightcrew)})
    .catch(err => {res.json(err)})
}
