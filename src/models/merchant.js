const pool = require('../config/database')

const getAllMerchant = () => {
    const SQLquery = 'SELECT * FROM merchant'

    return pool.execute(SQLquery)

}
const createNewMerchant = (body) => {
    const SQLquery = `INSERT INTO merchant (password,name,address,join_date,phone_number) 
    VALUES ('${body.password}','${body.name}','${body.address}','${body.join_date}','${body.phone_number}')`
    return pool.execute(SQLquery)
}

module.exports = {
    getAllMerchant,
    createNewMerchant,
}
