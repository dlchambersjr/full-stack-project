'use strict';

const express = require('express');
const app = express();
app.use(express.static('src'));
app.set('view engine', 'ejs');

// Custom 404 Handler because we always want to return a JSON response
module.exports = (req, res, next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.render('/404-error');
};