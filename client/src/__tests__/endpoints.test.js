const app = require('../../../server/server');
import supertest from 'supertest';
const request = supertest(app);
import chai from 'chai';
import 'regenerator-runtime/runtime';
import product2Info from '../../../exampleData/prodInfo/product2Info';

// Routes //

// No ID Sent

app.get('/test1', async (req, res) => {
  res.status(400);
});

app.get('/test', async (req, res) => {
  res.status(200).json({ message: 'pass!'});
});

describe('async tests', () => {
  it('hits the /test/product endpoint', async (done) => {
    const res = await request.get('test1')
    expect(res.status).toBe(400);
    done();
  });

  it('hits the test endpoint', async (done) => {
    const res = await request.get('/test');
    chai.expect(res.body).to.eql({ message: 'pass!'});
    chai.expect(res.status).to.equal(200);
    done();
  });



});
