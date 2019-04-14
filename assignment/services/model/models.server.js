
var mongoose = require('mongoose');


var connectionString = 'mongodb://127.0.0.1:27017/sip';
//TODO: replace with heroku mongodb
//var connectionString = 'mongodb://monish:abc123@ds347665.mlab.com:47665/heroku_sbxtf05b';



mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
