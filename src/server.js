'use strict';

const express = require('express');

// local middleware will load here
const router = require('./routes.js');
const notFound = require('./middleware/404.js');

const app = express();

// use express services
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(notFound);

let server;

module.exports = {
  app,
  start: (port) => {
    server = app.listen(port, () => console.log('FULL-STACK listening on PORT: ', port));
    return server;
  },
  stop: () => {
    server.close(() => console.log('Server has been stopped'));
  },
};