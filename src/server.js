'use strict';

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logReq = require('./middleware/logger');
const checkName = require('./middleware/validator');

app.use(express.json());

app.get('/person', checkName, (req, res) => {
  console.log('made it!:', req.query);
  let output = {
    name: req.query.name
  }
  res.status(200).json(output);
});

app.use(notFound);
app.use(errorHandler);
app.use('*', logReq);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`server is up on ${PORT}`)
  })
}

module.exports = {
  server: app,
  start: start
}