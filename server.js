const express = require('express');
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

//Handle HTTP requests
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
