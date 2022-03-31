const salesModels = require('../models/salesModels');

const getAll = async () => {
  const sales = await salesModels.getAll();

  return sales;
};

const getById = async (id) => {
  const sale = await salesModels.getById(id);
  if (sale.length === 0) return null;

  return sale;
};

module.exports = {
  getAll,
  getById,
};
