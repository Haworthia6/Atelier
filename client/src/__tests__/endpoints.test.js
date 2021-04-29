const app = require('../../../server/server');
import supertest from 'supertest';
const request = supertest(app);
import chai from 'chai';
import 'regenerator-runtime/runtime';
import product2Info from '../../../exampleData/prodInfo/product2Info';
import product2Style from '../../../exampleData/prodStyles/product2Style';
import product2Meta from '../../../exampleData/prodMeta/product2Meta';
import product2Related from '../../../exampleData/prodRelated/product2Related';

describe('Express Connection', () => {
  beforeEach(() => {
    app.get('/api/test', (req, res) => {
      res.status(200).send({ message: 'Working!' });
    });
  });

  it('hits the test endpoint', async (done) => {
    const res = await request.get('/api/test');
    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.eql({ message: 'Working!'});
    done();
  });
});

describe('Atelier API', () => {

  xdescribe('Atelier API not stubbed', () => {
    it('POST /api/product/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.post('/api/product').send({ id: 11002});
      expect(res.status).toBe(200);
      chai.expect(res.body).to.eql(product2Info);
      done();
    });

    xit('POST /api/product/ should return 400 if no ID param sent', async (done) => {
      const res = await request.post('/api/product').send({ id: 'invalid' });
      expect(res.status).toBe(400);
      done();
    });

    it('POST /api/styles/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.post('/api/styles').send({ id: 11002});
      expect(res.status).toBe(200);
      chai.expect(res.body).to.eql(product2Style);
      done();
    });

    xit('POST /api/styles/ should return 400 if invalid ID param sent', async (done) => {
      const res = await request.post('/api/styles').send({ id: 'invalid' });
      expect(res.status).toBe(400);
      done();
    });

    it('POST /api/meta/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.post('/api/meta/').send({ id: 11002 })
      expect(res.status).toBe(200);
      chai.expect(res.body).to.eql(product2Meta);
      done();
    });

    xit('POST /api/meta/ should return 400 if invalid ID param sent', async (done) => {
      const res = await request.post('/api/meta/').send({ id: 'invalid '});
      expect(res.status).toBe(400);
      done();
    });

    it('POST /api/related/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.post('/api/related/').send({ id: 11002 });
      expect(res.status).toBe(200);
      chai.expect(res.body).to.eql(product2Related.prod2);
      done();
    });

    xit('POST /api/related/ should return 400 if invalid ID param sent', async(done) => {
      const res = await request.post('/api/related/').send({ id : 'invalid '});
      expect(res.status).toBe(400);
      done();
    });
  });
});