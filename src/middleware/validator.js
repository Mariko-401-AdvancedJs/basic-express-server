'use strict';

function validator(req, res, next) {
  console.log('hitting validator:', req.query);
  if (req.query.name) {
    next();
  } else {
    next('500')
  }
}
module.exports = validator;