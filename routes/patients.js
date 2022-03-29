const express = require('express');
const { getAllPatients, createPatient } = require('../controllers/patients');
const { modelName } = require('../models/patient');

const router = express.Router();

router.get('/', getAllPatients)
router.post('/', createPatient)

module.exports = router