//
// A wrapper for exporting models
//
// Enable require('models') to import all models defined in this directory
// with file extension ".js".
// e.g.
//   Having model files Book.js, Music.js
//   const db = require("../models");
//   will enable access to Book and Music models as
//   db.Book and db.Music 
//
'use strict';

const fs = require('fs');
const path = require('path');
const models = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) &&
      (file !== path.basename(__filename)) &&
      (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const key = path.basename(file, '.js');
    models[key] = require(path.join(__dirname, file));
  });


module.exports = models;