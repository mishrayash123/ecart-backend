const express = require('express');

const authentication = require('./authentication');
const users = require('./users');
const cart  = require('./cart');

const router = express.Router();

export default (): any => {
  authentication(router);
  users(router);
  cart(router);
  return router;
};