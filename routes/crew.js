const express = require('express');
const router = express.Router();
const crewCtrl = require('../controllers/crew');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', checkAuth, crewCtrl.create);
router.put('/:id', checkAuth, crewCtrl.update);
router.delete('/:itinid/:id', checkAuth, crewCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
