const express = require('express');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const applyMiddleware = require('./src/middlewares/applymiddleware');
const port = process.env.PORT || 5000;

// middleware
applyMiddleware(app)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    const contestcollection = client.db('challengeforgeDB').collection('contest')
    const userCollection = client.db('challengeforgeDB').collection('users')

    // contest api
    app.get('/contest', async(req, res) =>{
      let sortObj = {}

      const sortField = req.query.sortField
      const sortOrder = req.query.sortOrder

      if(sortField && sortOrder){
        sortObj[sortField] = sortOrder
      }

      const cursor =  contestcollection.find().sort(sortObj)
      const result = await cursor.toArray();
      res.send(result)
    })

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




    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) =>{
  res.send('challangeForge is running')
})

app.listen(port, () =>{
  console.log(`challengeForge server is running on port ${port} `);
})
