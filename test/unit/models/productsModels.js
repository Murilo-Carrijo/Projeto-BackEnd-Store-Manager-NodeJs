const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

describe('Teste da camada Model dos products', () => {
  const fakeBd =   [
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
      sinon.stub(connection, 'execute').resolve(fakeBd);
    });

    after(() => {
      connection.execute.restore();
    });

    it('getAll retorna todos os produtos do Bd', () => {
      const result = await productsModel.getAll();

      expect(result).to.be.equal(fakeBd);
    });
  });
});
