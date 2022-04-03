const express = require('express');

const salesControllers = require('../controllers/salesControllers');
const validationSales = require('../middlewares/salesValidations');

const router = express.Router();

router
  .get('/', salesControllers.getAll)
  .get('/:id', salesControllers.getById)
  .post('/',
  validationSales.validQuantitySales,
  validationSales.validQuantitySales2,
  validationSales.validateId,
    salesControllers.add)
  .put('/:id',
  validationSales.validQuantitySales,
  validationSales.validQuantitySales2,
  validationSales.validateId,
    salesControllers.update);

module.exports = router;
