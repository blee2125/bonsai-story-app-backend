const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    tree_id: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    },
    notes: {
        type: String
    },
    entry_date: {
        type: Date,
        default: Date.now
  }
});

module.exports = Entry = mongoose.model('entry', EntrySchema);