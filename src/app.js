const express = require('express');
const app = express();
require('dotenv').config()
const {middleware} = require('./middlewares/middleware');
const contestRouter = require('./routers/Contest/index')
const userRouter = require('./routers/Users/index')
const creatorRouter = require('./routers/Creator/index')
const submitRouter = require('./routers/SubmitTask/index')
const paymentRouter = require('./routers/Payment/index')
const generateJWT = require('./authentication/genetareJWT');
const connectDB = require('./db/connectDB');

const port = process.env.PORT || 5000

middleware(app)

app.use(generateJWT)
app.use(contestRouter)
app.use(userRouter)
app.use(submitRouter)
app.use(creatorRouter)
app.use(paymentRouter)



// contest api  
app.get("/health", (req, res) => {
  res.send("challengeForge server is running....");
});


app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});


app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
})

const main = async()=>{
  await connectDB()
  app.listen(port, () => {
    console.log(`ChallengeForge sever is running ${port}`);
  })
}
main();