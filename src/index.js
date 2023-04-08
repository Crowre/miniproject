const express = require('express')
const PORT = 3000;

const usersRoutes = require('./routes/users.js')

const middlewareLogRequests = require('./middleware/log')

const app = express()

//semua request akan masuk ke "jembatan" ini sebelum dilanjutkan ke method lainnya
app.use(middlewareLogRequests);
//middleware untuk mengizinkan request body berupa json
app.use(express.json());
//path users dimana semua path users akan masuk ke file index.js
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`server running di port ${PORT}`);
})

