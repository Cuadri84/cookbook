require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const recepisRoutes = require('./routes/recepis')

//express app
const app= express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//Routes
app.use('/api/recepis' ,recepisRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=>{
        console.log('listening on port',process.env.PORT, 'and connected to the db')
        })
    })
    .catch((error)=>{
        console.log(error)
    })

