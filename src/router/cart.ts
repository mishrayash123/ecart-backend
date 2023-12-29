const express = require('express');

const { addtocart,getCart,deleteCart } = require('../controllers/Cart');

export default (router: any) => {
  router.post('/addtocart', addtocart);
  router.get('/getCart', getCart);
  router.delete('/deleteCart/:id', deleteCart);
};