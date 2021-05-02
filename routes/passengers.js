const express = require('express');
const router = express.Router();
const passengerCtrl = require('../controllers/passengers');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/:uid", checkAuth, passengerCtrl.index)
router.get("/show/:id", checkAuth, passengerCtrl.show)
router.post("/", checkAuth, passengerCtrl.create)
router.put("/:id", checkAuth, passengerCtrl.update)
router.delete("/:id", checkAuth, passengerCtrl.delete)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;