const { MongoClient } = require('mongodb');
async function main() {
    //constant from connection uri
    const uri = "mongodb+srv://ekies:VchsFsR41j1uQZNp@blacksburgrackscluster.0fs1kyd.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {

        console.log(e);
    } finally {
        //close the connection to my cluster
        await client.close();
    }

    //block further exection until this is completed
}

main().catch(console.error);

async function listDatabases(client) {

    const databaseList = await client.db.admin().listDatabases();
    console.log("databases:")
    databaseList.databses.array.forEach(db => {
        console.log(`- ${db.name}`);
    });

}
//mongodb+srv://ekies:<password>@blacksburgrackscluster.0fs1kyd.mongodb.net/?retryWrites=true&w=majority
/*
const express = require('express');

//use to connect to mongodb 
const mongoose = require('mongoose');
const path = require('path');
const app = express();
require('dotenv').config();


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const dbURI = process.env.DB_CONNECTION;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


app.get('https://us-east-1.aws.data.mongodb-api.com/app/data-prhca/endpoint/data/v1', (req, res) => {
    const data = { foo: 'bar', baz: 'qux' };
    res.json(data);
  });
  

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


//Start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



*/