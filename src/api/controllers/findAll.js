const Contest = require('../../models/Contest')

const findAll = async (req, res) =>{

        let queryObj = {}
        const tags = req.query.tags
        const email = req.query.email
        if(tags){
          queryObj.tags = tags  
        }
        if(email){
          queryObj.email = email
        }
        
      let sortObj = {}

      const sortField = req.query.sortField
      const sortOrder = req.query.sortOrder

      if(sortField && sortOrder){
        sortObj[sortField] = sortOrder
      }

      const page = Number(req.query.page)
      const limit = Number(req.query.limit)
      const skip = (page-1)* limit

      const cursor = await Contest.find(queryObj).skip(skip).limit(limit).sort(sortObj)
      const result = cursor

      const total = await Contest.countDocuments()
      res.send({total, result})

}

module.exports = findAll