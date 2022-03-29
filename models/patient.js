const { number } = require('joi');
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: Number,
    age: Number,
    adress: String
})

module.exports = mongoose.model('Patient', patientSchema)