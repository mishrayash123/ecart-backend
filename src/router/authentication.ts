const express = require('express');

const { login, register } = require('../controllers/authentication');

module.exports= (router: any) => {
  router.post('/auth/register', register);
  router.post('/auth/login', login);
};
