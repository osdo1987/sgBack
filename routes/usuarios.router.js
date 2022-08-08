const express = require('express');

const UsuariosService = require('./../services/usuarios.service');
const validatrHandler = require('./../middlewares/validator.handler');
const {crearUserSchema,actualizarUserSchema,obtenerUserSchema} = require('./../schemas/usuario.schema');

const router = express.Router();
const  service = new UsuariosService();

router.get('/',async (req,resp)=>{
  const usuarios = await service.buscar();
  resp.json(usuarios);
});

router.get('/:id',
validatrHandler(obtenerUserSchema,'pamams'),
  async (req,resp)=>{
    const {id}=req.params
    const usuario = await service.buscarUno(id);
      resp.json(usuario);
  }
);

router.post('/',
validatrHandler(crearUserSchema,'body'),
  async (req,resp)=>{
    const body = req.body;
    const nuevoUsuario = await service.crear(body);
    resp.status(201).json(nuevoUsuario);
  }
);

router.patch('/:id',
validatrHandler(obtenerUserSchema,'pamams'),
validatrHandler(actualizarUserSchema,'body'),
  async (req,resp)=>{
    try {
      const {id}=req.params
      const body = req.body;
      const usuario = await service.update(id,body);
        resp.json(usuario);
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
