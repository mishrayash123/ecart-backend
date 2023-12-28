const express = require('express');

const authentication = require('./authentication');
const users = require('./users');
const cart  = require('./cart');

const router = express.Router();

module.exports= (): any => {
  authentication(router);
  users(router);
  cart(router);
  return router;
};
