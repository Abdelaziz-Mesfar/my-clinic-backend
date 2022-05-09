const Joi = require('joi');

const patientValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.number(),
    age: Joi.number(),
    adress: Joi.string()
})

const updatePatientValidator = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    phone: Joi.number(),
    age: Joi.number(),
    adress: Joi.string()
    
})

const registerValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8)
})

const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const toothValidator = Joi.object({
    number: Joi.string(),
    description: Joi.string()
})

const appointmentValidator = Joi.object({
    date: Joi.date().required(),
    time: Joi.string().required()
})

module.exports = {
    patientValidator,
    updatePatientValidator,
    registerValidator,
    loginValidator,
    toothValidator,
    appointmentValidator
}