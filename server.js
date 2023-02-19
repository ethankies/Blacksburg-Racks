const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.DB_CONNECTION;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
