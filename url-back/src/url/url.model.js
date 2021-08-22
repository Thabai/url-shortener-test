const mongoose = require('mongoose');

// instantiate a mongoose schema
const urlSchema = new mongoose.Schema({
    urlCode: {
    type: String,
    unique: true,
    required: true,
  },
  longUrl: {
    type: String,
    unique: true,
    required: true,
  },
})

const Url = mongoose.model("Url", urlSchema);

// create a model from schema and export it
module.exports = Url;