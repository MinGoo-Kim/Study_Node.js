// User Routing Module
const express = require('express');
const router = express.Router();

const controller = require('./user.controller');

router.get('/users', controller.index);

router.get('/users/:id', controller.show);

router.delete('/users/:id', controller.destroy);

router.post('/users', controller.create);

router.put('/users/:id', controller.update);

// 크롬확장프로그램 InnerText - POST
router.post('/test', controller.text);

module.exports = router;