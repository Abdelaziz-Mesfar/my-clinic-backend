const jwt = require('jsonwebtoken')

const User = require('../models/User')
const Patient = require('../models/Patient')

module.exports = async function (req, res, next) {
    const token = req.headers.authorization
    if (!token) {
        res.status(401).json({ error: 'no token provided, access denied' });
        return;
    }
    try {
        const verifiedAndDecoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log({ verifiedAndDecoded });
        const userId = verifiedAndDecoded.userId
        const user = await User.findById(userId)
        // const patient = await Patient.find({user: userId})
        req.user = user
        // req.patient = patient
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid/Expired token' })
    }
}