const submitTask = require("../../models/SubmitTask")


const addSubmit = async (req, res) => {
  const query = req.body
  const submit = new submitTask(query)
  const result = await submit.save()
  res.send(result)
}
module.exports = addSubmit