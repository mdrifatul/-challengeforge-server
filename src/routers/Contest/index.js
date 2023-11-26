const findAll = require('../../api/controllers/findAll')

const router = require('express').Router()

router.get('/contest', findAll)
module.exports = router
