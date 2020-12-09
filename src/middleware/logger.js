'use strict';

function logReq(req, res, next) {
  console.log('REQUEST: ', req.method, req.path);
  next();
}

module.exports = logReq;