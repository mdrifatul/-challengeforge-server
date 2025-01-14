const { model, Schema } = require("mongoose");

const Userschema = new Schema({
  "name": {
    type: String,
    required: true
  },
  "email": {
    type: String,
    required: true,
  },
  'image': {
    type: String,
    required: false,
  },
  'role': {
    type: String,
    required: true
  },
})

const User = model('User', Userschema)
module.exports = User