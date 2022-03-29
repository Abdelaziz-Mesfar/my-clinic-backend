const Patient = require('../models/patient');
const { patientValidator } = require('../utilities/validators');

const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find()
        res.status(200).json(patients)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createPatient = async (req, res) => {
    const reqBody = req.body
    const validationResult = patientValidator.validate(reqBody, { abortEarly: true })
    if (validationResult.error) {
        return res.json({ validationResult })
    }
    try {
        const patient = new Patient(reqBody)
        const savedPatient = await patient.save()
        res.status(201).json({
            message: "New patient created successfully",
            patient: savedPatient
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllPatients,
    createPatient
}