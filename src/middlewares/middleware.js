const cors = require('cors');
const express = require('express');


const middleware = (app) => {
  app.use(cors(
    // {
      // origin: [
        // 'http://localhost:5173',
        // 'https://challengeforge-7ce2b.web.app'
      // ]
    // }
  ));
  app.use(express.json());

  // app.use((req, res, next) => {
  //   // CORS headers
  //   res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // restrict it to the required domain
  //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  //   // Set custom headers for CORS
  //   res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

  //   if (req.method === "OPTIONS") {
  //       return res.status(200).end();
  //   }

  //   return next();
  // })
};



module.exports = middleware