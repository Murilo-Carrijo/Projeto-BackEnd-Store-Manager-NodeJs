const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(`
  SELECT sp.sale_id as saleId, s.date, sp.product_id as productId, sp.quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id;`);

  return sales;
};

const getById = async (id) => {
  const [sales] = await connection.execute(`
  SELECT s.date, sp.product_id as productId, sp.quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    AND sp.sale_id=?;`,
    [id]);

  return sales;
};

module.exports = {
  getAll,
  getById,
};
