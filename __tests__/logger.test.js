'use strict';


const logReq = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();


  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    logReq(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })

})