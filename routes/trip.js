const express = require('express');
const router = express.Router();
const tripCtrl = require('../controllers/trips');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/:uid", checkAuth, tripCtrl.index)
router.get("/show/:id", checkAuth, tripCtrl.show)
router.post("/", checkAuth, tripCtrl.create)
router.put("/:id", checkAuth, tripCtrl.update)
router.delete("/:id", checkAuth, tripCtrl.delete)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;