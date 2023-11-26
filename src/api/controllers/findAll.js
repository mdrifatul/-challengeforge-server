const Contest = require('../../models/Contest')

const findAll = async (req, res) =>{

      let queryObj = {}
      const tags = req.query.tags
      if(tags){
        queryObj.tags = tags
      }

      let sortObj = {}

      const sortField = req.query.sortField
      const sortOrder = req.query.sortOrder

      if(sortField && sortOrder){
        sortObj[sortField] = sortOrder
      }

      const cursor = await Contest.find(queryObj).sort(sortObj)
      const result = cursor
      res.send(result)
}

module.exports = findAll