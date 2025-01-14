const payments = require("../../models/Payment")


const findPayment = async (req, res) => {
  const result = await payments.find()
  res.send(result)
}
module.exports = findPayment