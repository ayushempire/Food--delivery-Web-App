const mongoose = require("mongoose");

const { Schema } = mongoose;

// creating schema
// schema for user data structure

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now, //default date mean current date
  },
});

// exporting model
module.exports = mongoose.model("user", UserSchema);
