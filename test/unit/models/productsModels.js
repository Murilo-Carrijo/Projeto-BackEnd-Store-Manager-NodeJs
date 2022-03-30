const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const productsModels = require('../../../models/productsModels');

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
      sinon.stub(connection, 'execute').resolves(fakeBd);
    });

    after(() => {
      connection.execute.restore();
    });

    it('getAll retorna todos os produtos do Bd', async () => {
      const result = await productsModels.getAll();
      console.log('teste', result);

      expect(result).to.be.equals(fakeBd);
    });
  });
});
