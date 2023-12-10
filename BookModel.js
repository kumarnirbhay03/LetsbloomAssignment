const mongoose = require("mongoose");
const { Schema } = mongoose;
// Books Schema

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  edition: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
    unique: true,
  },
  isAvialable: {
    type: Boolean,
    default: 'true',
  }
});

module.exports = mongoose.model("Book", BookSchema);
