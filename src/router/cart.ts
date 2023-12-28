const express = require('express');

const { addtocart,getCart,deleteCart } = require('../controllers/Cart');

module.exports= (router: any) => {
  router.post('/addtocart', addtocart);
  router.get('/getCart', getCart);
  router.delete('/deleteCart/:id', deleteCart);
};