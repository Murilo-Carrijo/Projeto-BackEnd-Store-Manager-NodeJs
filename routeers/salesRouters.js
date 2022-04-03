const express = require('express');

const salesControllers = require('../controllers/salesControllers');

const router = express.Router();

router
  .get('/', salesControllers.getAll)
  .get('/:id', salesControllers.getById)
  .post('/', salesControllers.add)
  .put('/:id', salesControllers.update);

module.exports = router;
