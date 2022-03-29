const express = require('express');
const { getAllPatients, createPatient, updatePatient, deletePatient, getSinglePatient } = require('../controllers/patients');

const router = express.Router();

router.get('/', getAllPatients)
router.post('/', createPatient)
router.put('/:id', updatePatient)
router.delete('/:id', deletePatient)
router.get('/:id', getSinglePatient)

module.exports = router