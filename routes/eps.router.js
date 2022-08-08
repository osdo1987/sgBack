const express = require('express');

const EpsService = require('../services/eps.service');
const validatrHandler = require('../middlewares/validator.handler');
const {crearEpsSchema,actualizarEpsSchema,obtenerEpsSchema} = require('../schemas/eps.schema');

const router = express.Router();
const  service = new EpsService();

router.get('/',async (req,resp)=>{
  const eps = await service.buscar();
  resp.json(eps);
});

router.get('/:id',
validatrHandler(obtenerEpsSchema,'pamams'),
  async (req,resp)=>{
    const {id}=req.params
    const eps = await service.buscarUno(id);
      resp.json(eps);
  }
);

router.post('/',
validatrHandler(crearEpsSchema,'body'),
  async (req,resp)=>{
    const body = req.body;
    const nuevoUsuario = await service.crear(body);
    resp.status(201).json(nuevoUsuario);
  }
);

router.patch('/:id',
validatrHandler(obtenerEpsSchema,'pamams'),
validatrHandler(actualizarEpsSchema,'body'),
  async (req,resp)=>{
    try {
      const {id}=req.params
      const body = req.body;
      const eps = await service.update(id,body);
        resp.json(eps);
    } catch (error) {
      resp.status(404).json({
        mensaje:error.message
      })
    }
  }
);

router.delete('/:id',async (req,resp)=>{
  const {id}=req.params
  const rta = await service.eliminar(id);
    resp.json(rta);
});

module.exports = router;
