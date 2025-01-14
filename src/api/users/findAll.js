const User = require("../../models/User")

const findAll = async (req, res) => {
  const result = await User.find()
  res.send(result)
}

module.exports = findAll