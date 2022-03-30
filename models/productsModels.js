const connection = require('./connection');

const getAll = async () => {
  const [results] = await connection.execute('SELECT * FROM StoreManager.products;');
  console.log(results);
  return results;
};

module.exports = {
  getAll,
};
