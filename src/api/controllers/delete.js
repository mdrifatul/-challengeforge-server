const { default: mongoose } = require('mongoose')
const Contest = require('../../models/Contest')
const ObjectId = mongoose.Types.ObjectId

const Delete = async(req, res) =>{
  const id = req.params.id
  const query = {_id: new ObjectId(id)}
  const result = await Contest.findByIdAndDelete(query)
  res.send(result)
}
module.exports = Delete