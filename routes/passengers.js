const router = require('express').Router();
const passengersCtrl = require('../controllers/passengers');


router.get('/', checkAuth,passengersCtrl.index); 
router.use(require('../config/auth'));
router.post('/', checkAuth, passengerssCtrl.create)
router.put('/:id', checkAuth, passengersCtrl.update)
router.delete('/:id', checkAuth, passengersCtrl.delete)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;