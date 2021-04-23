const router = require('express').Router();
const schedulesCtrl = require('../controllers/schedules');

router.get('/', checkAuth,schedulesCtrl.index); 
router.get('/schedule/:id',checkAuth, schedulesCtrl.getOneSchedule)
router.use(require('../config/auth'));
router.post('/', checkAuth, schedulesCtrl.create)
router.put('/:id', checkAuth, schedulesCtrl.update)
router.delete('/:id', checkAuth, schedulesCtrl.delete)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;