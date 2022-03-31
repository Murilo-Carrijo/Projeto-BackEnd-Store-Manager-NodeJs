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
      sinon.stub(connection, 'execute').resolves([fakeBd]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('getAll retorna todos os produtos do Bd', async () => {
      const result = await productsModels.getAll();

      expect(result).to.be.equals(fakeBd);
    });
  });

  describe('Teste da função getById', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([fakeBd]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('getById retorna somente o produto com o id informado', async () => {
      const result = await productsModels.getById(1);

      expect(result).to.be.an('array');
    });
  });
});
