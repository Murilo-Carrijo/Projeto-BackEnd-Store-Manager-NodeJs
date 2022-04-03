const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../services/productsServices');
const productsControllers = require('../../../controllers/productsControllers');

describe('Testando a camada Controllers dos products', () => {
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

  const response = {};
  const request = {};

  before(() => {
    request.params = 1;
    request.body =  { "name": "produto", "quantity": 10 };
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
    it('Testando o retorno do status e json esperado - função getAll', async () => {
      await productsControllers.getAll(request, response);

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

    it('Testando o retorno do status e json esperado - função getById', async () => {
      await productsControllers.getById(request, response);

      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(fakeBd)).to.be.true;
    });
  });


  describe('Teste da função add', () => {
    before(() => {
      sinon.stub(productsService, 'add').resolves(
        { id: 4, name: 'produto', quantity: 10 },
      );
    });

    after(() => {
      productsService.add.restore();
    });

    it('Testando o retorno do status e json esperado - função add', async () => {
      await productsControllers.add(request, response);

      expect(response.status.calledWith(201)).to.be.true;
      expect(response.json.calledWith({ id: 4, name: 'produto', quantity: 10 })).to.be.true;
    });
  });

  describe('Teste da função update', () => {
    before(() => {
      sinon.stub(productsService, 'update').resolves(
        { "id": 1, "name": "produto", "quantity": 15 },
      );
    });

    after(() => {
      productsService.update.restore();
    });

    it('Testando o retorno do status e json esperado - função update', async () => {
      await productsControllers.update(request, response);

      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith({ "id": 1, "name": "produto", "quantity": 15 })).to.be.true;
    });
  });

  describe('Teste da função exclude', () => {
    before(() => {
      sinon.stub(productsService, 'exclude').resolves(fakeBd);
    });

    after(() => {
      productsService.exclude.restore();
    });

    it('Testando o retorno do status e json esperado - função exclude', async () => {
      await productsControllers.exclude(request, response);

      expect(response.status.calledWith(204)).to.be.true;
    });
  });


});
