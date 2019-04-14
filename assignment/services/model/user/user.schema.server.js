var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  facebook : {
    token: String,
    id: String
  },
  phone: String,
  dateCreated:{type: Date, default: Date.now()},
},{collection:'Users'});

module.exports = userSchema;

