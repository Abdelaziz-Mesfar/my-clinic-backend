const bcrypt = require('bcryptjs')

const User = require('../models/User')
const { registerValidator } = require('../utilities/validators')

const registerUser = async (req, res) => {
    try {
        const reqBody = req.body
        const validationResult = registerValidator.validate(reqBody, { abortEarly: false })
        if (validationResult.error) {
            return res.status(404).json(validationResult)
        }
        const { email, password } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(401).json({
                message: "An account with this email already exists"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = new User({
            ...reqBody,
            password: hashedPassword
        })
        const createdUser = await user.save()
        res.status(201).json({
            message: 'account created successfully',
            user: createdUser
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    registerUser
}