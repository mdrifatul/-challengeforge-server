const User = require("../../models/User")


const updateUser = async (req, res) => {
  const email = req.params.email
  const user = req.body
  const query = { email: email }
  const updatedDoc = {
    $set: {
      ...user,
      timestamp: Date.now(),
    }
  }
  const options = { new: true, upsert: true}
  const result = await User.findOneAndUpdate(query, updatedDoc, options)
  res.send(result)
}

module.exports = updateUser;