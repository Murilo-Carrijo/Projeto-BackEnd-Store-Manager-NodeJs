const { expect } = require('chai');
const sinon = require('sinon');

const salesModules = require('../../../services/salesServices');
const salesControllers = require('../../../controllers/salesControllers');
const { after } = require('mocha');

describe('Testando a camada Controllers dos sales', () => {
  const fakeBd = [
    {
        "saleId": 1,
        "date": "2022-04-01T00:19:11.000Z",
        "productId": 1,
        "quantity": 5
    },
    {
        "saleId": 1,
        "date": "2022-04-01T00:19:11.000Z",
        "productId": 2,
        "quantity": 10
    },
    {
        "saleId": 2,
        "date": "2022-04-01T00:19:11.000Z",
        "productId": 3,
        "quantity": 15
    }
];

  const response = {};
  const request = {};

  before(() => {
    request.params = 1;
    request.body = [
      {
        "productId": 1,
        "quantity": 3
      }
    ];

    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns(response);
  });

  describe('Teste da função getAll', () => {
    before(() => {
      sinon.stub(salesModules, 'getAll').resolves(fakeBd);
    });

    after(() => {
      salesModules.getAll.restore();
    });
    it('Testando o retorno do status e json esperado', async () => {
      await salesControllers.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(fakeBd)).to.be.true;
    });
  });

  describe('Teste da função getById', () => {
    before(() => {
      sinon.stub(salesModules, 'getById').resolves(fakeBd);
    });

    after(() => {
      salesModules.getById.restore();
    });
    it('Testando o retorno do status e json esperado', async () => {
      await salesControllers.getById(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });
  });

  describe('Teste da função add', () => {
    before(() => {
      sinon.stub(salesModules, 'add').resolves(
        {
          "id": 1,
          "itemsSold": [
            {
              "productId": 1,
              "quantity": 3
            }
          ]
        },
      );
    });

    after(() => {
      salesModules.add.restore();
    });
    it('Testando o retorno do status e json esperado', async () => {
      await salesControllers.add(request, response);

      expect(response.status.calledWith(201)).to.be.true;
    });
  });

});
