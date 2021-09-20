const { Console } = require('console')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000

//deals with connection to mongoose
const {MONGOURI} = require('./keys')

//getting models

{
require('./models/user')

require('./models/business')

}

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('err',()=>{
    Console.log("error connecting to mongo db",err)
})

//middleware
const customMiddleware = (req,res,next)=>{
    console.log("middleware")
    next()
}

//Logic part
app.get('/',(req,res) => {
    console.log("home"),
    res.send("hello world")
})

app.get('/about',customMiddleware, (req,res) => {
    console.log("about"),
    res.send("this is an about page")
})

app.listen(PORT , () => {
    console.log("serve is runningr",PORT)
} )