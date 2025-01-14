const addPayment = require('../../api/payment/addPayment')
const createPayment = require('../../api/payment/createPaymentIntent')
const findByEmail = require('../../api/payment/findbyemail')
const findById = require('../../api/payment/findById')
const findPayment = require('../../api/payment/findPayment')


const router = require('express').Router()

router.post('/create-payment-intent', createPayment)
router.get('/payments',findPayment)
router.get('/payments/:userEmail', findByEmail)
router.get('/payments/participate/:id',findById)
router.post('/payments', addPayment)

module.exports = router