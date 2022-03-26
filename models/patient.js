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
    phone: String,
    age: String,
    adresse: String
})

module.exports = mongoose.model('Patient', patientSchema)