const express = require('express');

const { login, register } = require('../controllers/authentication');

export default (router: any) => {
  router.post('/auth/register', register);
  router.post('/auth/login', login);
};
