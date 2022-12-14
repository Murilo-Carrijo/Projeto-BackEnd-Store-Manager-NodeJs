const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const validation = require('../middlewares/productsValidetions');

const router = express.Router();

router
  .get('/', productsControllers.getAll)
  .get('/:id', productsControllers.getById)
  .post('/', validation.validationName, validation.validationQuantity, productsControllers.add)
  .put('/:id', validation.validationName, validation.validationQuantity, productsControllers.update)
  .delete('/:id', productsControllers.exclude);

module.exports = router;
