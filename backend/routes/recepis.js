const express = require('express')

const router = express.Router()

//GET all recepis
router.get('/',(req,res)=>{
    res.json({mssg:'get all recepis'})
})

//GET a single recepi
router.get('/:id',(req,res)=>{
    res.json({mssg:'get one recepi'})
})

//POST a single recepi
router.post('/',(req,res)=>{
    res.json({mssg:'POST new recepi'})
})

//DELETE a single recepi
router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELETE one recepi'})
})

//PATCH a single recepi
router.patch('/:id',(req,res)=>{
    res.json({mssg:'PATCH one recepi'})
})

module.exports = router