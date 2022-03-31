const express = require('express');

const salesControllers = require('../controllers/salesControllers');

const router = express.Router();

router
  .get('/', salesControllers.getAll)
  .get('/:id', salesControllers.getById);

module.exports = router;
