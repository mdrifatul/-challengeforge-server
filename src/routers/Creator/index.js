const findCreator = require('../../api/creator/findCreator')


const router = require('express').Router()

router.get('/creator', findCreator)

module.exports = router