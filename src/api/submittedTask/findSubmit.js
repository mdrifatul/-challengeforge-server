const submitTask = require("../../models/SubmitTask")


const findSubmit = async (req, res) => {
  // const email = req.params.creatorEmail
  // const query = {creatorEmail: email}
  let queryObj = {}
  const email = req.query.email
  const winner = req.query.winner
  if (email) {
    queryObj.email = email
  }
  if (winner) {
    queryObj.winner = winner
  }

  const result = await submitTask.find(queryObj)
  res.send(result)
}

module.exports = findSubmit