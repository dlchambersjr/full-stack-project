'use strict';

const express = require('express');
const router = express.Router();
const content = require('./data/content.json');

router.get('/', (req, res) => {
  res.send('Server Home');
});

router.get('/content', (req, res) => {
  res.json(content);
});

module.exports = router;

