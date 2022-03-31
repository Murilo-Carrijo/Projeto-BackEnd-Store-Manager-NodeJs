const { expect } = require('chai');
const sinon = require('sinon');

const salesModels = require('../../../models/salesModels');
const salesServices = require('../../../services/salesServices');

describe('Teste da camada Services dos products - inputs válidos', () => {
  const fakeBd = [
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
      sinon.stub(salesModels, 'getAll').resolves(fakeBd);
    });

    after(() => {
      salesModels.getAll.restore();
    });

    it('getAll retorna todos os produtos do Bd', async () => {
      const result = await salesServices.getAll();

      expect(result).to.be.equals(fakeBd);
    });
  });

  describe('Teste da função getById', () => {
    before(() => {
      sinon.stub(salesModels, 'getById').resolves(fakeBd);
    });

    after(() => {
      salesModels.getById.restore();
    });

    it('getById retorna somente o produto com o id informado', async () => {
      const result = await salesServices.getById(1);

      expect(result).to.be.deep.equals(fakeBd);
    });
  });
});

describe('Testando a camada Services dos produtos - inputs inválidos', () => {
  const fakeBd = [];
  describe('Teste da a função getById passando um id inexistente', () => {
    before(() => {
      sinon.stub(salesModels, 'getById').resolves(fakeBd);
    });

    after(() => {
      salesModels.getById.restore();
    });

    it('getById retorna null para um id inexistente', async () => {
      const result = await salesServices.getById(99);

      expect(!result).to.be.true;
    });
  });
});
