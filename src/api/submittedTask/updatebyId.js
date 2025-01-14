const { default: mongoose } = require("mongoose");
const submitTask = require("../../models/SubmitTask");

const ObjectId = mongoose.Types.ObjectId


const updateById = async (req, res) =>{
  const id = req.params.id
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updateWinner = req.body;
      const winner = {
        $set: {
          result: updateWinner.result
        }
      }
      const result = await submitTask.findByIdAndUpdate(filter, winner, options)
      res.send(result)
}

module.exports = updateById