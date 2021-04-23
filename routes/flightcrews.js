const router = require('express').Router();
const flightcrewsCtrl = require('../controllers/flightcrews');


router.get('/', checkAuth,flightcrewsCtrl.index); 
router.use(require('../config/auth'));
router.post('/', checkAuth, flightcrewsCtrl.create)
router.put('/:id', checkAuth, flightcrewsCtrl.update)
router.delete('/:id', checkAuth, flightcrewsCtrl.delete)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;