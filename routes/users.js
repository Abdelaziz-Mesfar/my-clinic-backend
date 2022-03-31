const { Router } = require('express')
const { registerUser } = require('../controllers/users')

const router = Router()

router.post('/register', registerUser)

module.exports = router