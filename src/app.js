const express = require('express');
const app = express();
require('dotenv').config()
let jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const middleware = require('./middlewares/middleware');
const connectDB = require('./db/connectDB');
const contestRouter = require('./routers/Contest/index')



middleware(app)





const client = new MongoClient(process.env.DATABASE_LOCAL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// jwttoken related api
app.post('/jwt', async(req, res) =>{
  const user = req.body
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1h'});
  res.send({token});
})

const verifyToken = (req, res, next) =>{
  if(!req.headers.authorization){
    return res.status(401).send({message: 'unauthorized access'})
  }
  const token = req.headers.authorization.split(' ')[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
    if(err) {
      return res.status(401).send({message: 'unauthorized access'})
    }
    req.decoded = decoded;
    next();
  })
}


app.use(contestRouter)


async function run() {
  try {
    const contestcollection = client.db('challengeforgeDB').collection('contests')
    const userCollection = client.db('challengeforgeDB').collection('users')
    const creatorCollection = client.db('challengeforgeDB').collection('creator')

    // contest api
    // app.get('/contest', async(req, res) =>{
    //   let queryObj = {}
    //   const tags = req.query.tags
    //   if(tags){
    //     queryObj.tags = tags
    //   }

    //   let sortObj = {}
    //   const sortField = req.query.sortField
    //   const sortOrder = req.query.sortOrder

    //   if(sortField && sortOrder){
    //     sortObj[sortField] = sortOrder
    //   }

    //   const cursor =  contestcollection.find(queryObj).sort(sortObj)
    //   const result = await cursor.toArray();
    //   res.send(result)
    // })
   

    app.get('/contest/:id', async(req, res) =>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await contestcollection.findOne(query)
      res.send(result)
    })

    // user api
    app.post('/users', async(req, res) =>{
      const user = req.body;
      const query = {email: user.email}
      const isExist = await userCollection.findOne(query)
      if(isExist){
        return res.send({message: 'luser already exist', insertedId: null })
      }
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    app.get('/users',async(req, res) =>{
      const result = await userCollection.find().toArray()
      res.send(result)
    })

    app.delete('/users/:id', async(req, res) =>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })

    app.put('/users/admin/:id',async(req, res) =>{
      const id = req.params.id
      const user = req.body
      console.log(user);
      const filter = {_id: new ObjectId(id)}
      const options = {upsert : true}
      const updatedDoc = {
        $set:{
          ...user,
          timestamp: Date.now(),
        }
      }
      const result = await userCollection.updateOne(filter, updatedDoc,options)
      res.send(result)
    })

    // contest creator api
    app.get('/creator', async(req, res) =>{
      const result = await creatorCollection.find().toArray()
      res.send(result)
    }) 
    



    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});



app.use((err, _req, res, _next) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
})

// app.get("/", (req, res) => {
//   res.send("challengeForge is running....");
// });



app.get("/health", (req, res) => {
  res.send("challengeForge is running....");
});


const main= async ()=>{
  await connectDB()
  app.listen(port, () => {
    console.log(`challengeForge server is running on port ${port}`);
  });
}
main()

