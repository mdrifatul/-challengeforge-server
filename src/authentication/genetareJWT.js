// routers/Auth/index.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// JWT token generation route
router.post('/jwt', async (req, res) => {
  const user = req.body
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' });
  res.send({ token });
});

module.exports = router;