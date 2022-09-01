const express = require('express');
const morgan = require('morgan');

const ssr = require('../middlewares/ssr');

module.exports = function config(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.static('public'));
  app.use(ssr);
};