// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost:27017/sip')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'dist/sip')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

var connectionString = 'mongodb://127.0.0.1:27017/sip';
//TODO: get a mongodb server on heroku
//var connectionString = 'mongodb://monish:abc123@ds347665.mlab.com:47665/heroku_sbxtf05b';

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

app.use(session({
  secret: 'this is a secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());


// body-parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



require('./assignment/app')(app);
