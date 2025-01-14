const submitTask = require("../../models/SubmitTask")


const submitByEmail = async (req, res) => {
  const email = req.params.creatorEmail
  const query = { creatorEmail: email }
  const result = await submitTask.find(query)
  res.send(result)
}

module.exports = submitByEmail