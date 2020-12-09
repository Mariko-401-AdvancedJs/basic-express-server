'use strict'

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should respond with a 404 on a bad route', () => {
    return mockRequest
      .get('/yum')
      .then(results => {
        expect(results.status).toBe(404)
      }).catch(console.error);
  })
  it('should respond with a 404 on a bad method', () => {
    return mockRequest
      .delete('/yum')
      .then(results => {
        expect(results.status).toBe(404)
      }).catch(console.error);
  })
})
