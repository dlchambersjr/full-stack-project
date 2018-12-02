'use strict';

module.exports = (err, req, res, next) => {
  let error = {
    error: (typeof err === 'object' && err.statusMessage) || err,
  };

  res.statusCode = (typeof err === 'object' && err.status) || 500;
  res.statusMessage = (typeof err === 'object' && err.statusMessage) || 'Server Error';
  // res.setHeader('Content-Type', 'application/json');
  console.log(JSON.stringify(error));
  res.render('error.ejs');
};