const express = require('express');
const router = express.Router();
const scheduleCtrl = require('../controllers/schedules');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', checkAuth, scheduleCtrl.create);
router.put('/:id', checkAuth, scheduleCtrl.update);
router.delete('/:itinid/:id', checkAuth, scheduleCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
