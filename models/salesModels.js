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

const addSP = async (saleId, productId, quantity) => {
  const [results] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [saleId, productId, quantity],
  );

  return results;
};

const addS = async () => {
  const [result] = await connection.execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');

  return result;
};

const update = async (saleId, productId, quantity) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?;',
    [quantity, saleId, productId],
  );

  return result;
};

module.exports = {
  getAll,
  getById,
  addSP,
  addS,
  update,
};
