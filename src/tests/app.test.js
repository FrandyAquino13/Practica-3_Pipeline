const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('debe responder con Hola Mundo!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hola Mundo!');
  });
});
