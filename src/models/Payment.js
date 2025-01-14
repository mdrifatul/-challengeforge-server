const { Schema, model } = require("mongoose");


const paymentsSchema = new Schema({
  "name": {
    type: String,
    required: true
  },
  "userEmail": {
    type: String,
    required: true
  },
  "date": {
    type: String,
    required: true
  },
  "transactionId": {
    type: String,
    required: true
  },
  "contestId": {
    type: String,
    required: true
  },
  "creatorEmail": {
    type: String,
    required: true
  },
  "price": {
    type: Number,
    required: true
  },
  "contestName": {
    type: String,
    required: true
  },
  "image": {
    type: String,
    required: true
  },
  "deadline": {
    type: String,
    required: true
  },
  "prizemoney": {
    type: Number,
    required: true
  },
})

const payments = model('payments', paymentsSchema)
module.exports = payments;