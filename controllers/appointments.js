const Appointment = require('../models/Appointment')
const { appointmentValidator } = require('../utilities/validators')

const createNewAppointment = async (req, res) => {
    const reqBody = req.body
    const validationResult = appointmentValidator.validate(reqBody, { abortEarly: false })
    if (validationResult.error) {
        return res.json({ validationResult })
    }
    try {
        const appointment = new Appointment({ ...reqBody, user: req.user._id, patient: req.params.patientId })
        const savedAppointment = await appointment.save()
        res.status(201).json({
            message: "A new appointment created successfully",
            appointment: savedAppointment
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user._id })
        res.status(200).json(appointments)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createNewAppointment,
    getAllAppointments
}