//
// Configuration keys for database, etc.
//

'use strict';

module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  googleBooksURI: 'https://www.googleapis.com/books/v1/volumes'
};