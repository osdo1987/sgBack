const Joi = require('joi');


const identificacion = Joi.number().integer();
const nombres = Joi.string().min(3).max(36);
const apellidos = Joi.string().alphanum().min(3).max(36);
const email = Joi.string().email();
const role = Joi.string().min(1).max(36);
const genero = Joi.string().min(1).max(36);
const password = Joi.string().min(8).max(16);

const crearUserSchema = Joi.object({
   identificacion:identificacion.required(),
   nombres: nombres.required(),
   apellidos : apellidos.required(),
   email :email.required(),
   role: role.required(),
   genero: genero.required(),
   password:password.required()
});

const actualizarUserSchema = Joi.object({
  nombres: nombres,
   apellidos : apellidos,
   email :email,
   role: role,
   genero: genero,
   password:password
});

const obtenerUserSchema = Joi.object({
  identificacion:identificacion.required(),

});

module.exports = {crearUserSchema,actualizarUserSchema,obtenerUserSchema}
