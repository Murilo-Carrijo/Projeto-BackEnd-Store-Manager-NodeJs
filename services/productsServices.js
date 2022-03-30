const productsModels = require('../models/productsModels');

const getAll = async () => {
  const products = await productsModels.getAll();

  return products;
};

const getById = async (id) => {
  const [products] = await productsModels.getById(id);
  if (!products) {
    return null;
  }

  return products;
};
module.exports = {
  getAll,
  getById,
};
