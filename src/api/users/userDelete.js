const {default: mongoose} = require('mongoose')
const User = require("../../models/User")
const ObjectId = mongoose.Types.ObjectId

const deleteUser = async (req, res) =>{
  const id = req.params.id
  const query = { _id: new ObjectId(id) }
  const result = await User.findByIdAndDelete(query)
  res.send(result)
}

module.exports = deleteUser