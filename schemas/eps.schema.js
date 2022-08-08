const Joi = require('joi');


const id = Joi.number().integer();
const nombreEps = Joi.string().min(3).max(36);
const alergias = Joi.string().min(3).max(36);
const medicamento = Joi.string().min(3).max(36);
const descripcion = Joi.string().min(1).max(36);
const userId = Joi.number().integer();

const crearEpsSchema = Joi.object({

   nombre: nombreEps.required(),
   alergias : alergias.required(),
   medicamento:medicamento.required(),
   descripcion:descripcion.required(),
   userId:userId.required()
});

const actualizarEpsSchema = Joi.object({
   nombre: nombreEps,
   alergias : alergias,
   medicamento:medicamento,
   descripcion:descripcion,
});

const obtenerEpsSchema = Joi.object({
  id:id.required(),

});

module.exports = {crearEpsSchema,actualizarEpsSchema,obtenerEpsSchema}
