const ProductModel = require('../models/product')

const getAllProduct = async (req, res) => {
    try {
        const [data] = await ProductModel.getAllProduct()
        res.json({
            message: 'get all product success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }

};
const createNewProduct = async (req, res) => {
    const { body } = req

    if (!body.name || !body.quantity || !body.price) {
        return res.status(400).json({
            message: 'data yang dimasukkan kurang atau salah',
            data: null
        })
    }
    try {
        await ProductModel.createNewProduct(body)
        res.status(201).json({
            message: 'create new product success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
};

const updateProduct = async (req, res) => {
    const { idProduct } = req.params
    const { body } = req
    try {
        await ProductModel.updateProduct(body, idProduct)
        res.json({
            message: 'update product success',
            data: {
                id: idProduct,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

const deleteProduct = async (req, res) => {
    const { idProduct } = req.params
    try {
        await ProductModel.deleteProduct(idProduct)
        res.json({
            message: "delete product success",
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
    getAllProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
};