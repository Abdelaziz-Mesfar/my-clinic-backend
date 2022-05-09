const { Schema, model } = require('mongoose')

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }
})

module.exports = model('Appointment', appointmentSchema)