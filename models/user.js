const { ALPN_ENABLED } = require('constants')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    membershipdate:{
        type:Date,

    },
    owns:{
        //we will push the ids of every business he owns into this list
        type:[Number],
    }
})
mongoose.model("User",userSchema)