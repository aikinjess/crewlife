const router = require('express').Router();
const cardCtrl = require('../controllers/cards');


router.get('/:id', cardCtrl.index)
router.use(require('../config/auth'));
router.post('/', checkAuth, cardCtrl.create)
router.delete('/:id', checkAuth, cardCtrl.deleteCard)
router.put('/:id', checkAuth, cardCtrl.updateCard)



function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;