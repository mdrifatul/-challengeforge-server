const User = require("../../models/User");


const insertUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email }
  const isExist = await User.findOne(query)
  if (isExist) {
    return res.send({ message: 'user already exist', insertedId: null })
  }
  const users = new User(user)
  const result = await users.save()
  res.send(result)
}
module.exports = insertUser