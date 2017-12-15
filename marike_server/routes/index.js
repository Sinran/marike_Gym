const express = require('express');
const router = express.Router();
const controller = require('./agent.controller');

router.post('/api/account/get_my_info', controller.userLogin);


module.exports = router;
