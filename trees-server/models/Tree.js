const mongoose = require('mongoose');

const TreeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  typeOfTree: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  entries: {
    entry: [{ body: String, date: Date }],
  },
  date_planted: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tree = mongoose.model('tree', TreeSchema);