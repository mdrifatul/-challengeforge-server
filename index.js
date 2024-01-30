require('dotenv').config()
const http = require('http') 
const app = require('./src/app');
const connectDB = require('./src/db/connectDB');
const server = http.createServer(app)
const port = process.env.PORT || 5000;

const main = async()=>{
  await connectDB()
  server.listen(port, () => {
    console.log(`sever is running ${port}`);
  })
}
main();






// const express = require('express');
// const cors = require('cors');
// const app = express();
// require('dotenv').config()
// let jwt = require('jsonwebtoken');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const port = process.env.PORT || 5000;

// // middleware

// app.use(cors({
//   // origin: [
//   // 'http://localhost:5000',
//   // 'challengeforge-7ce2b.web.app',
//   // 'challengeforge-7ce2b.firebaseapp.com'
// // ],
//   // credentials: true
// }));

// app.use((req, res, next) => {
//   // CORS headers
//   res.header("Access-Control-Allow-Origin", "challengeforge-7ce2b.web.app"); // restrict it to the required domain
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   // Set custom headers for CORS
//   res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

//   if (req.method === "OPTIONS") {
//       return res.status(200).end();
//   }
//   return next();
// })

// app.use(cors());
// app.use(express.json());



// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.DATABASE_LOCAL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// // jwttoken related api
// app.post('/jwt', async(req, res) =>{
//   const user = req.body
//   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1h'});
//   res.send({token});
// })

// const verifyToken = (req, res, next) =>{
//   const authHeader = req.headers.authorization;
//   if(!authHeader){
//      return res.status(401).send({message: 'unauthorized access'})
//   }
//   const token = authHeader.split(' ')[1]
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
//      if(err) {
//        return res.status(401).send({message: 'unauthorized access'})
//      }
//      req.decoded = decoded;
//      next();
//   })
//  }




// async function run() {
//   try {
//     const contestcollection = client.db('challengeforgeDB').collection('contests')
//     const userCollection = client.db('challengeforgeDB').collection('users')
//     const creatorCollection = client.db('challengeforgeDB').collection('creator')

//     // contest api
//     app.get('/contest', async(req, res) =>{
//       let queryObj = {}
//       const tags = req.query.tags
//       const email = req.query.email
//       if(tags){
//         queryObj.tags = tags  
//       }
//       if(email){
//         queryObj.email = email
//       }

//       let sortObj = {}
//       const sortField = req.query.sortField
//       const sortOrder = req.query.sortOrder

//       if(sortField && sortOrder){
//         sortObj[sortField] = sortOrder
//       }

//       const cursor =  contestcollection.find(queryObj).sort(sortObj)
//       const result = await cursor.toArray();
//       res.send(result)
//     })
   

//     // app.get('/contest/:id', async(req, res) =>{
//     //   const id = req.params.id
//     //   const query = {_id: new ObjectId(id)}
//     //   const result = await contestcollection.findOne(query)
//     //   res.send(result)
//     // })

//     // app.get('/contests/:email', async (req, res) => {
//       // const email = req.query.email
//       // const qurey = {email: email}
//     //   const cursor = await contestcollection.find({email})
//     //   const result =await cursor.toArray();
//     //   res.send(result)
//     // })

//     app.post('/contest',async(req, res) =>{
//       const item = req.body
//       const result = await contestcollection.insertOne(item)
//       res.send(result)
//     })

    

//     // user api

//     app.get('/users',async(req, res) =>{
//       const result = await userCollection.find().toArray()
//       res.send(result)
//     })


//     app.post('/users', async(req, res) =>{
//       const user = req.body;
//       const query = {email: user.email}
//       const isExist = await userCollection.findOne(query)
//       if(isExist){
//         return res.send({message: 'luser already exist', insertedId: null })
//       }
//       const result = await userCollection.insertOne(user)
//       res.send(result)
//     })

//     app.delete('/users/:id',verifyToken, async(req, res) =>{
//       const id = req.params.id
//       const query = {_id: new ObjectId(id)}
//       const result = await userCollection.deleteOne(query)
//       res.send(result)
//     })

//     app.put('/users/:email',async(req, res) =>{
//       // const id = req.params.id
//       // const filter = {_id: new ObjectId(id)}
//       const email = req.params.email
//       const user = req.body
//       const query = { email: email }
//       const options = { upsert: true }
//       const updatedDoc = {
//         $set:{
//           ...user,
//           timestamp: Date.now(),
//         }
//       }
//       const result = await userCollection.updateOne(query, updatedDoc,options)
//       res.send(result)
//     })
//     // Get user role
//     app.get('/users/:email', async (req, res) => {
//       const email = req.params.email
//       const result = await userCollection.findOne({ email })
//       res.send(result)
//     })

//     // contest creator api
//     app.get('/creator', async(req, res) =>{
//       const result = await creatorCollection.find().toArray()
//       res.send(result)
//     }) 
  

//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);


// app.get('/', (req, res) =>{
//   res.send('challangeForge is running')
// })

// app.listen(port, () =>{
//   console.log(`challengeForge server is running on port ${port} `);
// })
