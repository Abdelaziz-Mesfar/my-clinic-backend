const express = require('express')
const { createNewAppointment, getAllAppointments } = require('../controllers/appointments')

const checkAuth = require('../middlewares/check-auth')

const router = express.Router()

router.post('/:patientId', checkAuth, createNewAppointment)
router.get('/', checkAuth, getAllAppointments)

module.exports = router