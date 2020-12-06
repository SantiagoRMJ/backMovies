
const router = require('express').Router();
const userController = require('./controller');

router.post('/', userController.registro);
router.get('/user/login', userController.login);

module.exports = router;