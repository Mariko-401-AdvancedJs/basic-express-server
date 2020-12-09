'use strict';

function notFound(req, res, next) {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'not found' });
}

module.exports = notFound;