const express = require('express');
const { getAllPatients } = require('../controllers/patients');
const { modelName } = require('../models/patient');

const router = express.Router();

router.get('/', getAllPatients)

module.exports = router