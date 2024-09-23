const Joi = require("joi");

const articuloSchema = Joi.object({
  id: Joi.string().alphanum().length(10).required(),
  nombre: Joi.string().max(20).required(),
  descripcion: Joi.string().max(200).allow(null, ""),
  precio: Joi.number().precision(2).required(),
  modelo: Joi.string().alphanum().max(10).allow(null, ""),
});

const updateArticuloSchema = Joi.object({
  descripcion: Joi.string().max(200).allow(null, ""),
  modelo: Joi.string().alphanum().max(10).allow(null, ""),
});

module.exports = {
  articuloSchema,
  updateArticuloSchema
};
