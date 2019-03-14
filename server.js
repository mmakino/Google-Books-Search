//
// Main backend server javascript
//
'use strict';

require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MongoDB/Mongoose database connection config
const dbKey = require('./config/keys').mongoURI;

// Load route(s)
const apiBooks = require('./routes/api/books');
const apiBooksSearch = require('./routes/api/books/search');

// Connect to database
mongoose
  .connect(dbKey, {
    useNewUrlParser: true,
    useCreateIndex: true    
  })
  .then(() => { console.log(`Connected to MongoDB ${dbKey}`) })
  .catch(err => console.log(err));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/books', apiBooks);
app.use('/api/books/search', apiBooksSearch);

app.get('/', (req, res) => {
  res.send('test');
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
