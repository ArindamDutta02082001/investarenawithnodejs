const { ALPN_ENABLED } = require('constants')
const mongoose = require('mongoose')

const businessSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    },
    shortDescription:{
        type:String,
        required:true
    },
    longDescription:{
        type:String,
        required:true
    },
    postdate:{
        type:Date,

    },

    owner:{
       
        type:[String],
    },
    typeofinv:{
        type:String
    },
    workingcapital:{
        type:Number
    },
    assets:{
        type:[String]

    },
    liabilites:{
        type:[String]
    },
    totalowners:{

    },
    revenue:{
        type:Number
    },
    expenses:{
        type:[String]
    },
    netprofit:{
        type:Number

    }

})
mongoose.model("Business",businessSchema)