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

const add = async (sale) => {
  const addS = await salesModels.addS();
  const result = {
    id: addS.insertId,
    itemsSold: sale,
  };

  sale.forEach(async ({ productId, quantity }) => {
    await salesModels.addSP(addS.insertId, productId, quantity);
  });

  return result;
};

const update = async (saleId, sale) => {
  const checkSales = await salesModels.getById(saleId);
  if (checkSales.length === 0) return null;
  const result = {
    saleId,
    itemUpdated: sale,
  };

  sale.forEach(async ({ productId, quantity }) => {
    await salesModels.update(saleId, productId, quantity);
  });

  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
};
