const salesServices = require('../services/salesServices');

const getAll = async (_req, res) => {
  try {
    const sales = await salesServices.getAll();
    return res.status(200).json(sales);
  } catch (e) {
    console.log(e);
    return res.status(580).json({ message: 'Erro no servidor' });
  }
};

module.exports = {
  getAll,
};
