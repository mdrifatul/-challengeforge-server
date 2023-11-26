const { model, Schema } = require("mongoose");

const Contestschema = new Schema({
    "name":{
        type:String ,
        required: true
    },
    'image':{
        type:String ,
        required: true
    },
    "attempted":{
        type:Number,
        required: true
    },
    "description":{
        type:String ,
        required: true
    },
    "contestprice":{
        type:Number,
        required: false
    },
    "deadline":{
        type:String ,
        required: false,
    },
    "prizemoney":{
        type:Number,
        required: true
    },
    "tags":{
        type:String,
        required: true
    },
    "instruction":{
        type:String,
        required: true
    },
    
})

const Contest = model('Contest', Contestschema)
module.exports = Contest