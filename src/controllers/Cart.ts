const express = require('express');

const { createCart ,getbyproductid,getcart,deleteCartById} = require('../db/Cart');

 export const addtocart = async (req: any, res: any) => {
    try {
      const { productid, userid } = req.body;
  
      if (!productid || !userid) {
        return res.sendStatus(400);
      }

      const existingcart = await getbyproductid(productid);
  
    if (existingcart) {
      return res.sendStatus(400);
    }

      const user  = await createCart({
        productid,
        userid,
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

   export const getCart = async (req: any, res: any) => {
    try {
      const users :any = await getcart();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

   export const deleteCart = async (req: any, res: any) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteCartById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
