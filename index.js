const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.f3vnz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('service'));
const port = 5000;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const services = client.db("educationSite").collection("subjects");
  app.post('/addService', (req, res) => {
    const serviceInfo = req.body;
    console.log(serviceInfo);
    // learnerCollection.insertOne(learnerInfo)
    //     .then(result => {
    //         res.send(result.insertedCount > 0)
    //     })
})
});


app.listen(port);