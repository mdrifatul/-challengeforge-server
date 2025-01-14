const addSubmit = require('../../api/submittedTask/addSubmit')
const findSubmit = require('../../api/submittedTask/findSubmit')
const submitByEmail = require('../../api/submittedTask/findSubmitByEmail')
const updateById = require('../../api/submittedTask/updatebyId')

const router = require('express').Router()

router.get('/submitted', findSubmit)
router.get('/submitted/:creatorEmail', submitByEmail)
router.patch('/submitted/:id', updateById)
router.post('/submitted',addSubmit)

module.exports = router