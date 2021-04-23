const Schedule = require('../models/schedule')

module.exports = {
  create,
  index,
  delete: deleteOne,
  update,
}

function update(req, res) {
  Schedule.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(schedule => {res.json(schedule)})
  .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
  Schedule.findByIdAndDelete(req.params.id)
  .then(schedule => {res.json(schedule)})
  .catch(err => {res.json(err)})
}

function create(req, res) {
    req.body.addedBy = req.user._id
    req.body.cast = req.body.cast.split(',');
    Schedule.create(req.body)
    .then(schedule => {res.json(schedule)})
    .catch(err => {res.json(err)})
  }

function index(req, res) {
  Schedule.find({})
  .populate('addedBy')
  .then(movies => {res.json(schedule)})
  .catch(err => {res.json(err)})
}