const productsService = require('../services/productsServices');

const getAll = async (_req, res) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
    return res.status(580).json({ message: 'Erro no servidor' });
  }
};

module.exports = {
  getAll,
};
