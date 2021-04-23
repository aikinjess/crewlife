const passenger = require('../models/passenger')
const Passenger = require('../models/passenger')

module.exports = {
  create,
  index,
  delete: deleteOne,
  update,
}

function update(req,res) {
    const passengers = {
        food: req.body.food,
        snack: req.body.snack,
        drink: req.body.drink
      }; 
      Foods.findByIdAndUpdate(req.params.id, { $set: passengers }, { new: true }).then(
        foods => res.json(foods).catch((err = console.log(err)))
      );
    };

function deleteOne(req,res) {
  Passenger.findByIdAndDelete(req.params.id)
  .then(passenger => {res.json(passenger)})
  .catch(err => {res.json(err)})
}

function index(req,res) {
  Passenger.find([])
  .then(passengers => {res.json(passengers)})
  .catch(err => {res.json(err)})
}

function create(req, res) {
    req.body.addedBy = req.user._id
    Flightcrew.create(req.body)
    .then(flightcrew => {res.json(flightcrew)})
    .catch(err => {res.json(err)})
}
