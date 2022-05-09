const express = require('express')
const { createNewAppointment } = require('../controllers/appointments')

const checkAuth = require('../middlewares/check-auth')

const router = express.Router()

router.post('/:patientId', checkAuth, createNewAppointment)

module.exports = router