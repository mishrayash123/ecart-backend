const express = require('express');

const authentication = require('./authentication');
const users = require('./users');
const cart  = require('./cart');

const router = express.Router();

const router1 = (): any => {
  authentication(router);
  users(router);
  cart(router);
  return router;
};


module.exports={router1}