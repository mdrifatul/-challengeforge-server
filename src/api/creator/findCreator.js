const Creator = require("../../models/Creator")


const findCreator = async (req, res) => {
  const result = await Creator.find()
  res.send(result)
}

module.exports = findCreator