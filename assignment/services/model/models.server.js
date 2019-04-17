
var mongoose = require('mongoose');


//var connectionString = 'mongodb://127.0.0.1:27017/sip';
//TODO: replace with heroku mongodb
var connectionString = 'mongodb://sip:sippin1@ds143326.mlab.com:43326/heroku_lf9sxv4w';



mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
