const salesServices = require('../services/salesServices');

const getAll = async (_req, res) => {
  try {
    const sales = await salesServices.getAll();
    return res.status(200).json(sales);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await salesServices.getById(id);
    if (!sale) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(sale);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

const add = async (req, res) => {
  const sale = req.body;
  try {
    const newSale = await salesServices.add(sale);
    return res.status(201).json(newSale);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

const update = async (req, res) => {
  const sale = req.body;
  const { id } = req.params;
  try {
    const newSale = await salesServices.update(id, sale);
    if (!newSale) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(newSale);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
};
