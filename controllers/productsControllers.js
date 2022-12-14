const msgerror500 = 'Erro no servidor';
const productsService = require('../services/productsServices');

const getAll = async (_req, res) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await productsService.getById(id);
    if (!products) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: msgerror500 });
  }
};

const add = async (req, res) => {
  const newProductObj = req.body;
  try {
    const product = await productsService.add(newProductObj);
    if (!product) return res.status(409).json({ message: 'Product already exists' });
    return res.status(201).json(product);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: msgerror500 });
  }
};

const update = async (req, res) => {
  const productObj = req.body;
  const { id } = req.params;
  try {
    const product = await productsService.update(Number(id), productObj);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: msgerror500 });
  }
};

const exclude = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsService.exclude(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(204).end();
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: msgerror500 });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};
