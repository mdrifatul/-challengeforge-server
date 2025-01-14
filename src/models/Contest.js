const { model, Schema } = require("mongoose");

const Contestschema = new Schema({
    "name":{
        type:String ,
        required: true
    },
    "email":{
        type:String,
        required: true,
    },
    "description":{
        type:String ,
        required: true
    },
    "contestprice":{
        type:Number,
        required: true
    },
    "prizemoney":{
        type:Number,
        required: true
    },
    "deadline":{
        type:String ,
        required: false,
    },
    "tags":{
        type:String,
        required: true
    },
    "instruction":{
        type:String,
        required: true
    },
    'image':{
        type:String ,
        required: false
    },
    "status":{
        type:String,
        required: true
    }
})

const Contest = model('Contest', Contestschema)
module.exports = Contest