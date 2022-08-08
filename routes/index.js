const express = require('express');
const usuariosRouter = require('./usuarios.router');
const epsRouter = require('./eps.router');

function routerApi(app){

  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/usuarios',usuariosRouter);
  router.use('/eps',epsRouter);
}

module.exports = routerApi;
