const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../services/productsServices');
const productsControllets = require('../../../controllers/productsControllers');

describe('Testando a camada Controllers dos products', () => {
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

  const response = {};
  const request = {};

  before(() => {
    request.params = 1;
    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns(response);
  });

  describe('Teste da função getAll', () => {
    before(() => {
      sinon.stub(productsService, 'getAll').resolves(fakeBd);
    });

    after(() => {
      productsService.getAll.restore();
    });
    it('Testando o retorno do status e json esperado', async () => {
      await productsControllets.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(fakeBd)).to.be.true;
    });
  });


  describe('Teste da função getById', () => {
    before(() => {
      sinon.stub(productsService, 'getById').resolves(fakeBd);
    });

    after(() => {
      productsService.getById.restore();
    });

    it('Testando o retorno do status e json esperado', async () => {
      await productsControllets.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });


});
