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
const updateMerchant = (req, res) => {
    const { idUser } = req.params
    console.log('idUser:', idUser);
    res.json({
        message: "update user success",
        data: req.body,
    })
};
const deleteMerchant = (req, res) => {
    const { idUser } = req.params
    res.json({
        message: "delete user success",
        data: {
            id: idUser,
            name: "wildan",
            password: 'wildan',
            address: "tabing,padang",
            join_date: "2019-12-09",
            phone_number: "081254457667"
        }
    })
};
module.exports = {
    getAllMerchant,
    createNewMerchant,
    updateMerchant,
    deleteMerchant
};