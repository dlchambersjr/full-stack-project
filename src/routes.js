'use strict';

const express = require('express');
const router = express.Router();
const content = require('../data/content.json');

router.get('/hello', (req, res) => {
  res.send('Hello World');
});

router.get('/', (req, res) => {
  res.json(content);
});

module.exports = router;

