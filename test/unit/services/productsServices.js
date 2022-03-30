const { expect } = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../models/productsModels');
const productsService = require('../../../services/productsServices');

describe('Teste da camada Model dos products', () => {
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
});
