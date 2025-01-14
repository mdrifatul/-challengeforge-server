const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser')
const { LOCAL_CLIENT, NORMAL_CLIENT } = require('../config/default')


const middleware = (app) => {
  app.use(cors({
    origin: [
        LOCAL_CLIENT,
        NORMAL_CLIENT
      ],
      credentials: true
  }))

  app.use(express.json())
  app.use(cookieParser())

  // app.use((req, res, next) => {
  //   // CORS headers
  //   res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // restrict it to the required domain
  //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  //   // Set custom headers for CORS
  //   res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

  //   if (req.method === "OPTIONS") {
  //       return res.status(200).end();
  //   }

    // return next();
  // })
};


module.exports = {middleware}