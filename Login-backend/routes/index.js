const router = require('express').Router();
const apiRouterUser = require('./api-0.1/users');

router.use('/user', apiRouterUser);

module.exports = router;