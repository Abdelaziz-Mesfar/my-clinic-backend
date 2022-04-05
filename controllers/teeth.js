const Tooth = require('../models/Tooth')
const { toothValidator } = require('../utilities/validators')

const addToothDescription = async (req, res) => {
    const reqBody = req.body
    const validationResult = toothValidator.validate(reqBody, { abortEarly: false })
    if (validationResult.error) {
        return res.json({ validationResult })
    }
    try {
        console.log({ reqParams: req.params });
        const tooth = new Tooth({ ...reqBody, number: req.params.toothId, user: req.user._id })
        const savedTooth = await tooth.save()
        res.json({
            message: 'description added successfully',
            tooth: savedTooth
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    addToothDescription
}