const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT || 5000

const usersRoutes = require('./routes/users.js')
const productRoutes = require('./routes/product.js')
const middlewareLogRequests = require('./middleware/log')

const app = express()

//semua request akan masuk ke "jembatan" ini sebelum dilanjutkan ke method lainnya
app.use(middlewareLogRequests);
//middleware untuk mengizinkan request body berupa json
app.use(express.json());
//path users dimana semua path users akan masuk ke file index.js
app.use('/users', usersRoutes);
app.use('/product', productRoutes)
app.listen(PORT, () => {
    console.log(`server running di port ${PORT}`);
})

