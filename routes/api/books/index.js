//
// Route for saved searches
//
'use strict';

const expores = require('express');
const router = expores.Router();
const db = require('../../../models');

//
// GET /api/books
// return all saved books as JSON
//
router.get('/', (req, res) => {
  db.Book.find({})
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.json(err));
});

//
// POST /api/books
// save a new book to the database
//
router.post('/', (req, res) => {
  db.Book.findOneAndUpdate({
    link: req.body.link
  },
  req.body, {
    upsert: true,
    returnNewDocument: true
  })
  .then(doc => {
    console.log(`Added ${doc}`);    
    res.json(doc);
  })
  .catch(err => res.json(err));
});

//
// DELETE /api/books/:id
//
router.delete('/:id', (req, res) => {
  res.json({ books: "DELETE books"});
});

// Export the router
module.exports = router;
