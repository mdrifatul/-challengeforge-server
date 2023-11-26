const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DATABASE_LOCAL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    const contestcollection = client.db('challengeforgeDB').collection('contests')
    const userCollection = client.db('challengeforgeDB').collection('users')
    const creatorCollection = client.db('challengeforgeDB').collection('creator')

    // contest api
    app.get('/contest', async(req, res) =>{
      let queryObj = {}
      const tags = req.query.tags
      if(tags){
        queryObj.tags = tags
      }

      let sortObj = {}
      const sortField = req.query.sortField
      const sortOrder = req.query.sortOrder

      if(sortField && sortOrder){
        sortObj[sortField] = sortOrder
      }

      const cursor =  contestcollection.find(queryObj).sort(sortObj)
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


app.get('/', (req, res) =>{
  res.send('challangeForge is running')
})

app.listen(port, () =>{
  console.log(`challengeForge server is running on port ${port} `);
})
