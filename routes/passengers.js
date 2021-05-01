const express = require('express');
const router = express.Router();
const passengersCtrl = require('../controllers//passengers');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', checkAuth, passengersCtrl.create);
router.put('/:id', checkAuth, passengersCtrl.update);
router.delete('/:tripid/:id', checkAuth, passengersCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
