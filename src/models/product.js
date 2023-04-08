const pool = require('../config/database')

const getAllProduct = () => {
    const SQLquery = 'SELECT * FROM product'

    return pool.execute(SQLquery)
}
const createNewProduct = (body) => {
    const SQLquery = `INSERT INTO product (name,quantity,price) 
    VALUES 
        (
        '${body.name}',
        '${body.quantity}',
        '${body.price}'
        )`;
    return pool.execute(SQLquery);
}

const updateProduct = (body, idProduct) => {
    const SQLquery = `UPDATE product SET 
                        name = '${body.name}',
                        quantity = '${body.quantity}',
                        price = '${body.price}'
                        WHERE id = ${idProduct}`
    return pool.execute(SQLquery)
}

const deleteProduct = idProduct => {
    const SQLquery = `DELETE FROM product WHERE id=${idProduct}`;
    return pool.execute(SQLquery)
}

module.exports = {
    getAllProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
}