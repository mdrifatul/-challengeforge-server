const findAll = require('../../api/users/findAll')
const findOnebyEmail = require('../../api/users/findOnebyEmail')
const insertUser = require('../../api/users/insertUser')
const deleteUser = require('../../api/users/userDelete')
const updateUser = require('../../api/users/userUpdate')


const router = require('express').Router()

router.get('/users', findAll)
router.get('/users/:email', findOnebyEmail)
router.post('/users', insertUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:email', updateUser)


module.exports = router