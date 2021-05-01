import supertest from 'supertest';
import 'regenerator-runtime/runtime';
import product2Info from '../../../exampleData/prodInfo/product2Info';
import product2Style from '../../../exampleData/prodStyles/product2Style';
import product2Meta from '../../../exampleData/prodMeta/product2Meta';
import product2Related from '../../../exampleData/prodRelated/product2Related';

import app from '../../../server/server';
const request = supertest(app);

describe('Express Connection', () => {
  beforeEach(() => {
    app.get('/api/test', (req, res) => {
      res.status(200).send({ message: 'Working!' });
    });
  });

  it('hits the test endpoint', async (done) => {
    const res = await request.get('/api/test');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Working!'});
    done();
  });
});

describe('Atelier API', () => {

  xdescribe('Atelier API not stubbed', () => {
    it('GET /api/product/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.get('/api/product').query({ id: 11002});
      expect(res.status).toBe(200);
      expect(res.body).toEqual(product2Info);
      done();
    });

    xit('GET /api/product/ should return 400 if no ID param sent', async (done) => {
      const res = await request.get('/api/product').query({ id: 'invalid' });
      expect(res.status).toBe(400);
      done();
    });

    it('GET /api/styles/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.get('/api/styles').query({ id: 11002});
      expect(res.status).toBe(200);
      expect(res.body).toEqual(product2Style);
      done();
    });

    xit('GET /api/styles/ should return 400 if invalid ID param sent', async (done) => {
      const res = await request.get('/api/styles').query({ id: 'invalid' });
      expect(res.status).toBe(400);
      done();
    });

    it('GET /api/meta/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.get('/api/meta/').query({ id: 11002 });
      expect(res.status).toBe(200);
      expect(res.body).toEqual(product2Meta);
      done();
    });

    xit('Get /api/meta/ should return 400 if invalid ID param sent', async (done) => {
      const res = await request.get('/api/meta/').query({ id: 'invalid '});
      expect(res.status).toBe(400);
      done();
    });

    it('Get /api/related/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.get('/api/related/').query({ id: 11002 });
      expect(res.status).toBe(200);
      expect(res.body).toEqual(product2Related.prod2);
      done();
    });

    xit('Get /api/related/ should return 400 if invalid ID param sent', async(done) => {
      const res = await request.get('/api/related/').query({ id : 'invalid '});
      expect(res.status).toBe(400);
      done();
    });
  });
});