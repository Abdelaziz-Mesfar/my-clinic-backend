const express = require('express')

const { addToothDescription, deleteToothDescription, getAllTeethOnePatientDescription } = require('../controllers/teeth')
const checkAuth = require('../middlewares/check-auth')

const router = express.Router()

router.get('/:patientId/:toothId', checkAuth, getAllTeethOnePatientDescription)
router.post('/:patientId/:toothId',checkAuth, addToothDescription)
router.delete('/:patientId/:toothId/:id', checkAuth, deleteToothDescription)

module.exports = router