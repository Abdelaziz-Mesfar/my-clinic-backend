const express = require('express');
const { getAllPatients, createPatient, updatePatient, deletePatient } = require('../controllers/patients');
const { modelName } = require('../models/patient');

const router = express.Router();

router.get('/', getAllPatients)
router.post('/', createPatient)
router.put('/:id', updatePatient)
router.delete('/:id', deletePatient)

module.exports = router