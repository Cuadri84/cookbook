const express = require('express')
const {
    getRecepis,
    getRecepi,
    createRecepi,
    deleteRecepi,
    updateRecepi
} = require('../controllers/recepiController')


const router = express.Router()

//GET all recepis
router.get('/',getRecepis)

//GET a single recepi
router.get('/:id',getRecepi)

//POST a single recepi
router.post('/',createRecepi)

//DELETE a single recepi
router.delete('/:id',deleteRecepi)

//PATCH a single recepi
router.patch('/:id',updateRecepi)

module.exports = router