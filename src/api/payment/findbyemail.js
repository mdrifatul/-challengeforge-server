const payments = require("../../models/Payment")


const findByEmail = async (req, res) => {
  const email = req.params.userEmail
  const query = { userEmail: email }
  const result = await payments.find(query)
  res.send(result)
}

module.exports = findByEmail