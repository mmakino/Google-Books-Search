//
// Model for Books
//
// * `title` - Title of the book from the Google Books API
// * `authors` - The books's author(s) as returned from the Google Books API
// * `description` - The book's description as returned from the Google Books API
// * `image` - The Book's thumbnail image as returned from the Google Books API
// * `link` - The Book's information link as returned from the Google Books API
// 
//

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: null
  },
  authors: [{
    type: String
  }],
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String,
    unique: true
  }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
