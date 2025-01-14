const payments = require("../../models/Payment");


const addPayment = async (req, res) => {
  const payment = req.body;
  const paymentResult = new payments(payment)
  const Result = await paymentResult.save();
  res.send(Result);
}
module.exports = addPayment