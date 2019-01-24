'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const targetUrl = 'https://marcus.io/';

function handleRedirect(req, res) {
  res.redirect(targetUrl);
}

app.get('*', handleRedirect);

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
