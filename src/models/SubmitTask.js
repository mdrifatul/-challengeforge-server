const { Schema, model } = require("mongoose");


const submittedSchema = new Schema({
  "task": {
    type: String,
    required: true
  },
  "username": {
    type: String,
    required: true,
  },
  "email": {
    type: String,
    required: true
  },
  "creatorEmail": {
    type: String,
    required: true
  },
  "contestName": {
    type: String,
    required: true
  },
  "prizemoney": {
    type: Number,
    required: true
  },
  "transactionId": {
    type: String,
    required: false,
  },
  "contestId": {
    type: String,
    required: false,
  },
  "result": {
    type: String,
    required: true
  },
})

const submitTask = model('Submittask', submittedSchema)

module.exports = submitTask