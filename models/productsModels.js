const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');

  return products;
};

const getById = async (id) => {
  const [product] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?;',
  [id]);
  return product;
};

const add = async (name, quantity) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);
  `, [name, quantity]);

  return {
    id: insertId,
    name,
    quantity,
  };
};

const getByName = async (name) => {
  const [product] = await connection.execute('SELECT * FROM StoreManager.products WHERE name = ?;',
  [name]);

  return product;
};

const update = async (id, name, quantity) => {
  await connection.execute(`
  UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;`,
  [name, quantity, id]);

  return {
    id,
    name,
    quantity,
  };
};

const exclude = async (id) => {
  const result = await connection.execute('DELETE FROM StoreManager.products WHERE id = ?',
  [id]);

  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  getByName,
  update,
  exclude,
};
