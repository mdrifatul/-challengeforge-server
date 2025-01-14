const {  Schema, model } = require("mongoose");

const CreatorSchema = new Schema({
  "name": {
    type: String,
    required: true, 
  },
  "image": {
    type: String,
    required: true, 
  },
  "contestname": {
    type: String,
    required: true, 
  },
  "description": {
    type: String,
    required: true, 
  }
});

const Creator = model('contentcreator', CreatorSchema);
module.exports = Creator;
