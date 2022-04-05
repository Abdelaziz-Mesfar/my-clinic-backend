const Tooth = require('../models/Tooth')
const { toothValidator } = require('../utilities/validators')

const getAllTeethOnePatientDescription = async (req, res) => {
    try {
        const tooth = await Tooth.find({ number: req.params.toothId, user: req.user._id })
        res.status(200).json(tooth)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

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

const deleteToothDescription = async (req, res) => {
    const { id } = req.params
    try {
        const tooth = await Tooth.findOneAndDelete({ _id: id, user: req.user._id })
        if (!tooth) {
            return res.status(404).json({
                message: 'tooth description not found'
            })
        }
        return res.json({
            message: 'description delete successfully'
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    addToothDescription,
    deleteToothDescription,
    getAllTeethOnePatientDescription
}