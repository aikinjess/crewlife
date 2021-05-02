const Crew = require('../models/crew');

module.exports = {
  index,
  create,
  update,
  delete: deleteCrew,
  show,
}

function index(req, res) {
  try {
    Crew.find({owner: req.user._id})
    .then((crews) => {
      res.json(crews)
    })
  } catch (error) {
    res.status(400).send({'err': err.errmsg});
  }
}

function create(req,res) {
  try {
    Crew.create(req.body)
    .then(crew => {
      res.json(crew)
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

function update(req,res) {
  try {
    Crew.findOne({_id: req.body.crewID, owner: req.user._id})
    .then(crew => {
      crew.name = req.body.name;
      crew.phoneNo = req.body.phoneNo;
      crew.role = req.body.role;
      crew.save()
      .then(crew => {
        res.json(crew)
      })
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

function deleteCrew(req,res) {
  try {
    Crew.findByIdAndDelete(req.params.id)
    .then(crew => {
      res.json(crew)
    })
    .catch(err => {
      res.json(err.message)
    })
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}


function show(req,res) {
  Crew.findOne({_id: req.params.id, owner: req.user._id})
  .then(crew => {
    res.json(crew)
  })
  .catch(err => {
    res.status(400).send({'err': err.errmsg});
  })
}