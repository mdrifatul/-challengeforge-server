const Contest = require("../../models/Contest");
const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId


const Update = async(req, res) =>{
  const id = req.params.id
  const filter = {_id: new ObjectId(id)}
  const options = { upsert: true };
  const updateContest = req.body;
  const update = {
    $set: {
      name:updateContest.name,
      deadline:updateContest.deadline,
      contestprice:updateContest.contestprice, 
      prizemoney:updateContest.prizemoney, 
      tags:updateContest.tags, 
      instruction:updateContest.instruction,
      status:updateContest.status,
      attempted:updateContest.attempted
    },
  }
  const result = await Contest.findByIdAndUpdate(filter,update,options)
  // console.log(result);
  res.send(result)
}
module.exports = Update