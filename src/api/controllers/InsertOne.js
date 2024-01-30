const Contest = require('../../models/Contest')

const InsertOne = async (req, res) => {
  const item = req.body
  const contest = new Contest(item)
  const result = await contest.save()
  res.send(result)
}

module.exports = InsertOne