const Joi = require('joi');

const patientValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.number(),
    age: Joi.number(),
    adress: Joi.string()
})

module.exports = {
    patientValidator
}