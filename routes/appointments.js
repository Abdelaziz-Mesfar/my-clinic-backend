const express = require('express')
const { 
    createNewAppointment, 
    getAllAppointments, 
    getSinglePatientAppointments, 
    updateAppointment, 
    deleteAppointment, 
    getSingleAppointment } = require('../controllers/appointments')

const checkAuth = require('../middlewares/check-auth')

const router = express.Router()

router.get('/', checkAuth, getAllAppointments)
router.get('/:id', checkAuth, getSingleAppointment)
router.get('/patient-appointment/:patientId', checkAuth, getSinglePatientAppointments)
router.post('/:patientId', checkAuth, createNewAppointment)
router.put('/:patientId/:id', checkAuth, updateAppointment)
router.delete('/:id', checkAuth, deleteAppointment)

module.exports = router