const Joi = require('joi');


const id = Joi.number().integer();
const descripcion = Joi.string().min(3).max(36);
const estado = Joi.boolean();

const crearUserSchema = Joi.object({
    id:id.required(),
    descripcion:descripcion.required(),
    estado:estado.required()
});

const actualizarUserSchema = Joi.object({
    descripcion:descripcion,
    estado:estado
});

const obtenerUserSchema = Joi.object({
  id:id.required(),

});

module.exports = {crearUserSchema,actualizarUserSchema,obtenerUserSchema}
