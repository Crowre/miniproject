const pool = require('../config/database')

const getAllMerchant = () => {
    const SQLquery = 'SELECT * FROM merchant'

    return pool.execute(SQLquery)

}
// const createNewMerchant = () => {
//     const SQLquery = `insert into merchant (password,name,address,join_date,phone_number) 
//     values ('${body.password}','${body.name}','${body.address}','${body.join_date}','${body.phone_number}')`
//     return pool.execute(SQLquery)
// }

module.exports = {
    getAllMerchant,
    // createNewMerchant,
}
