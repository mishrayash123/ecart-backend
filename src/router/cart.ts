import express from 'express';

import { addtocart,getCart,deleteCart } from '../controllers/Cart';

export default (router: express.Router) => {
  router.post('/addtocart', addtocart);
  router.get('/getCart', getCart);
  router.delete('/deleteCart/:id', deleteCart);
};