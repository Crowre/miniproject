const merchantModel = require('../models/merchant')

const getAllMerchant = async (req, res) => {
    try {
        const [data] = await merchantModel.getAllMerchant()
        res.json({
            message: 'get all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }

};
const createNewMerchant = async (req, res) => {
    const { body } = req
    try {
        await merchantModel.createNewMerchant(body)
        res.json({
            message: 'create new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
};

const deleteMerchant = async (req, res) => {
    const { idUser } = req.params
    try {
        await merchantModel.deleteMerchant(idUser)
        res.json({
            message: "delete user success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }

};
module.exports = {
    getAllMerchant,
    createNewMerchant,
    deleteMerchant
};