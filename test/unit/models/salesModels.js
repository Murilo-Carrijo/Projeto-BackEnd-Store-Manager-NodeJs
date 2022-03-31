const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const salesModels = require('../../../models/salesModels');

describe('Teste da camada Model dos Sales', () => {
  const fakeBdSales = [
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }
  ];

  describe('Teste da função getAll', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([fakeBdSales]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('getAll retorna todos as vendas do Bd', async () => {
      const result = await salesModels.getAll();

      expect(result).to.be.a('array');
    });
  });

  describe('Teste da função getById', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([fakeBdSales]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('getById retorna somente a venda com o id informado', async () => {
      const result = await salesModels.getById(1);

      expect(result).to.be.an('array');
    });
  });
});
