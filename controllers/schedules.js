const Schedule = require('../models/schedule')

module.exports = {
  create,
  index,
  getOneSchedule,
  delete: deleteOne,
  update,
}

function update(req,res) {
  Schedule.findByIdAndUpdate(req.params.id, req.body)
  .then(snippet => {res.json(snippet)})
  .catch(err => {res.json(err)})
}

function deleteOne(req,res) {
  Schedule.findByIdAndDelete(req.params.id)
  .then(snippet => {res.json(snippet)})
  .catch(err => {res.json(err)})
}

function index(req,res) {
  Schedule.find([])
  .populate('addedBy')
  .then(schedules => {res.json(schedules)})
  .catch(err => {res.json(err)})
}

function getOneSchedule(req, res) {
  console.log(`schedule ID in URL is: ${req.params.id}`);
}

function create(req, res) {
    req.body.addedBy = req.user._id
    Schedule.create(req.body)
    .then(schedule => {res.json(schedule)})
    .catch(err => {res.json(err)})
}