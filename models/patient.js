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
}, {
    timestamps: true
})

module.exports = mongoose.model('Patient', patientSchema)