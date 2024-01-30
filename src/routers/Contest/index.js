const Delete = require('../../api/controllers/delete')
const findAll = require('../../api/controllers/findAll')
const findOne = require('../../api/controllers/findOnebyId')
const InsertOne = require('../../api/controllers/InsertOne')
const Update = require('../../api/controllers/update')

const router = require('express').Router()

router.get('/contest', findAll)
router.get('/contest/:id', findOne)
router.post('/contest', InsertOne)
router.delete('/contest/:id', Delete)
router.patch('/contest/:id', Update)

module.exports = router
