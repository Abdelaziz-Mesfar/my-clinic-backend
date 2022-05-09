const express = require('express')
const { createNewAppointment, getAllAppointments, getSinglePatientAppointments } = require('../controllers/appointments')

const checkAuth = require('../middlewares/check-auth')

const router = express.Router()

router.get('/', checkAuth, getAllAppointments)
router.get('/:patientId', checkAuth, getSinglePatientAppointments)
router.post('/:patientId', checkAuth, createNewAppointment)

module.exports = router