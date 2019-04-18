var userModel = require('./model/user/user.model.server');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");



module.exports = function(app) {
  app.post("/api/user", createUser);
  app.get("/api/username", findByUsername);
  app.get("/api/user", findByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/register", register);
  app.post("/api/loggedIn", loggedin);
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));


  // //bad practice but to test localhost:
  // const appId = 274246986794207;
  // const appSecret = '3ba526057a117b5c76b72eb6162b1824';

  //bad practice but this is another set of keys
  const local = 381499992451385;
  const localSecret = "6b692e75c14aec0788ba413afb8cf9dc"


  // facebook config for heroku
  var facebookConfig = {


    clientID     : process.env.FB_CLIENT_ID || local,
    clientSecret : process.env.FB_CLIENT_SECRET || localSecret,
    callbackURL  : process.env.FB_CALL_BACK_URL || "http://localhost:3200/auth/facebook/callback/"
  };


  // passports
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));





  // auth with Facebook
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/#/login'
  }), function(req, res) {
    res.redirect('/#/user/' + req.user._id);
  });

  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function(user){
        done(null, user);
      },
      function(err){
        done(err, null);
      }
    );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.json(200);
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user).then(
      function(user){
        if(user){
          req.login(user, function(err) {
            if(err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      });
  }

  function loggedin(req, res){
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function localStrategy(username, password, done) {
    console.log("inside local strategy");
    console.log(username);
    console.log(password);
    userModel.findUserByUserName(username).then(
      function(user) {
        console.log(user);
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      function(error) {
        console.log('error here');
        if (error) { return done(error); }
      }
    );
  }

  function facebookStrategy(token, refreshToken, profile, done){
    userModel.findFacebookUser(profile.id)
      .then(
        function(user) {
          if(user) {
            console.log('user');
            return done(null, user);
          } else {
            console.log('profile');
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName: names[1],
              firstName: names[0],
              email: profile.emails ? profile.emails[0].value:"",
              facebook: { id: profile.id, token: token } };
            return userModel.createUser(newFacebookUser);
          }
        }, function(err) {
          if (err) {
            return done(err);
          } } );
  }

  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          console.log("user successfully created!");
          res.json(user);
        },
        function (error) {
          if (error) {console.log(error);
            res.status(400).send(error);
          }
        }
      )
  }

  function findByUsername(req, res) {
    const username = req.query["username"];
    userModel.findUserByUserName(username).then(function(user){
      res.send(user);
    }, function(error){
      res.status(400).send(error);
    });
  }

  function findByCredentials(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    //console.log(username);
    //console.log(password);
    userModel.findByCredential(username, password).then(function(user){
      //console.log(user);
      res.send(user);
    }, function(error){
      res.status(400);
    });
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).exec(
      function (err,user) {
        if(err){
          return res.sendStatus(400).send(err);
        }
        return  res.json(user);
      });
  }

  function updateUser(req, res) {
    const userId = req.params["userId"];
    var user = req.body;
    userModel.updateUser(userId,user).then(
      function(user) {
        res.send(user);
      }, function (error) {
        res.status(400).send("update failed");
      });
  }


};
