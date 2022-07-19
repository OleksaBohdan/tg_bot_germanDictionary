const mongoose = require('mongoose');
const config = require('../config/config');

const dictSchema = mongoose.Schema({
  word: {
    type: String,
    indexed: true,
  },

  artirle: {
    type: String,
  },

  translate: {
    type: String,
  },
});

dictSchema.index({ '$**': 'text' });

const Dictionary = mongoose.model('Dictionary', dictSchema);

mongoose.connect(`${config.DB}`, () => {
  console.log('Connected to db');
});

module.exports = Dictionary;
