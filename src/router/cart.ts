import express from 'express';

import { addtocart,getCart,deleteCart } from '../controllers/Cart';

export default (router: any) => {
  router.post('/addtocart', addtocart);
  router.get('/getCart', getCart);
  router.delete('/deleteCart/:id', deleteCart);
};