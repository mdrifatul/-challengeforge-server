const payments = require("../../models/Payment")


const findById = async (req, res) => {
  const id = req.params.id
  const query = { contestId: id }
  const result = await payments.findOne(query)
  res.send(result)
}
module.exports = findById

