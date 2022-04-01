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

const add = async (newProductObj) => {
  const checkName = await productsModels.getByName(newProductObj.name);
  if (checkName.length > 0) return null;
  const newProduct = await productsModels.add(newProductObj.name, newProductObj.quantity);
  return newProduct;
};

const update = async (id, { name, quantity }) => {
  const checkProductId = await productsModels.getById(id);
  if (checkProductId.length < 1) return null;
  const updateProduct = await productsModels.update(id, name, quantity);
  return updateProduct;
};

const exclude = async (id) => {
  const checkProductId = await productsModels.getById(id);
  if (checkProductId.length === 0) return null;
  const excludeProduct = await productsModels.exclude(id);
  return excludeProduct;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};
