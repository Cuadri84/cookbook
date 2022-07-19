const Recepi = require('../models/recepiModel')
const mongoose = require('mongoose')

//GET all recepis
const getRecepis = async (req, res) => {
    const recepis = await Recepi.find({}).sort({createdAt:'descending'})

    res.status(200).json(recepis)
}

//GET a single recepi
const getRecepi = async (req, res) => {
    const { id }=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no recepi found'})
    }

    const recepi = await Recepi.findById(id)

    if(!recepi){
        return res.status(404).json({error:'no recepi found'})
    }

    res.status(200).json(recepi)
}

//POST a single recepi
const createRecepi = async (req,res)=>{
    const {title, ingredients, rece} =req.body

    try{
        const recepi = await Recepi.create({title, ingredients, rece})
        res.status(200).json(recepi)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//DELETE a single recepi
const deleteRecepi = async (req, res) => {
    const { id }=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no recepi found'})
    }

    const recepi = await Recepi.findOneAndDelete({_id: id})

    if(!recepi){
        return res.status(404).json({error:'no recepi found'})
    }

    res.status(200).json(recepi)
}
//PATCH a single recepi
const updateRecepi = async (req, res) => {
    const { id }=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no recepi found'})
    }

    const recepi = await Recepi.findOneAndUpdate({_id: id},{...req.body})

    if(!recepi){
        return res.status(404).json({error:'no recepi found'})
    }

    res.status(200).json(recepi)
}

module.exports = {
    getRecepis,
    getRecepi,
    createRecepi,
    deleteRecepi,
    updateRecepi
}