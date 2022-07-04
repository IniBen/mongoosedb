const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router.get('/', controller.example)

module.exports = router;