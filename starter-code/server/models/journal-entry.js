const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalSchema = new Schema({
  date: {type: Date},
  title: {type: String},
  content: {type: String}
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
