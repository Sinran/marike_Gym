const express = require('express');
const router = express.Router();
const controller = require('./agent.controller');

router.post('/client/login', controller.userLogin);

router.post('/client/userSearchLesson', controller.userSearchLesson);

router.post('/client/cancelLesson', controller.cancelLesson);

module.exports = router;
