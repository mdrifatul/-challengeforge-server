const User = require("../../models/User")

const findOnebyEmail = async (req, res) => {
  const email = req.params.email
  const result = await User.findOne({ email })
  res.send(result)
}

module.exports = findOnebyEmail