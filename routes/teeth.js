const express = require('express')

const { addToothDescription } = require('../controllers/teeth')
const checkAuth = require('../middlewares/check-auth')

const router = express.Router()

router.post('/:toothId',checkAuth, addToothDescription)

module.exports = router