const express = require('express');

const UserController = require('../controller/users.js')

const router = express.Router()

//create db - post method
// router.post('/', UserController.createNewMerchant)

//read db - get method
router.get('/', UserController.getAllMerchant)

//update - patch
router.patch('/:idUser', UserController.updateMerchant)

//delele - delete
router.delete('/:idUser', UserController.deleteMerchant)

module.exports = router;