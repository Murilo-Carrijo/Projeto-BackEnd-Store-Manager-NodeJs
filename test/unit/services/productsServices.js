const { expect } = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../models/productsModels');
const productsService = require('../../../services/productsServices');

describe('Teste da camada Services dos products - inputs válidos', () => {
  const fakeBd = [
    {
      "id": 1,
      "name": "produto A",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "produto B",
      "quantity": 20
    }
  ];

  describe('Teste da função getAll', () => {
    before(() => {
      sinon.stub(productsModels, 'getAll').resolves(fakeBd);
    });

    after(() => {
      productsModels.getAll.restore();
    });

    it('getAll retorna todos os produtos do Bd', async () => {
      const result = await productsService.getAll();

      expect(result).to.be.equals(fakeBd);
    });
  });

  describe('Teste da função getById', () => {
    before(() => {
      sinon.stub(productsModels, 'getById').resolves([fakeBd]);
    });

    after(() => {
      productsModels.getById.restore();
    });

    it('getById retorna somente o produto com o id informado', async () => {
      const [result] = await productsService.getById(1);

      expect(result).to.be.deep.equals(
        { id: 1, name: 'produto A', quantity: 10 }
      );
    });
  });
});

describe('Testando a camada Services dos produtos - inputs inválidos', () => {
  const fakeBd = [];
  describe('Teste da a função getById passando um id inexistente', () => {
    before(() => {
      sinon.stub(productsModels, 'getById').resolves(fakeBd);
    });

    after(() => {
      productsModels.getById.restore();
    });

    it('getById retorna null para um id inexistente', async () => {
      const result = await productsService.getById(99);

      expect(!result).to.be.true;
    });
  });
});
