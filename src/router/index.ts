import express from 'express';

import authentication from './authentication';
import users from './users';
import cart  from './cart';

const router = express.Router();

export default (): any => {
  authentication(router);
  users(router);
  cart(router);
  return router;
};