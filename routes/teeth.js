const express = require('express')

const { addToothDescription, deleteToothDescription, getAllTeethOnePatientDescription } = require('../controllers/teeth')
const checkAuth = require('../middlewares/check-auth')

const router = express.Router()

router.get('/:toothId', checkAuth, getAllTeethOnePatientDescription)
router.post('/:toothId',checkAuth, addToothDescription)
router.delete('/:toothId/:id', checkAuth, deleteToothDescription)

module.exports = router