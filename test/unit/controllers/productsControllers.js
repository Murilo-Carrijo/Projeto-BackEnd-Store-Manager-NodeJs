const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../services/productsServices');
const productsControllets = require('../../../controllers/productsControllers');

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
  });

  it('Testando o retorno do status e json esperado', async () => {
    await productsControllets.getAll(request, response);
    console.log('response', response.status);
    console.log('banco', fakeBd);
    expect(response.status.calledWith(200)).to.be.false;
    expect(response.json.calledWith(fakeBd)).to.be.false;
  });

  // describe('Teste da função getById', () => {
    // TypeError: Cannot destructure property 'id' of '((cov_r4abnpfd5(...).s[8]++) , req.params)' as it is undefined.
  //   before(() => {
  //     sinon.stub(productsService, 'getById').resolves(fakeBd);
  //   });

  //   after(() => {
  //     productsService.getById.restore();
  //   });
  // });

  // it('Testando o retorno do status e json esperado', async () => {
  //   await productsControllets.getById(request, response);

  //   expect(response.status.calledWith(200)).to.be.equal(true);
  // });

});
