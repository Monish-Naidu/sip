var userModel = require('./model/user/user.model.server');


module.exports = function(app) {

  app.get("/api/users", findAllUsers);



  function findAllUsers(req, res) {
    userModel.findAllUsers().then(function(users){
      res.send(users);
    }, function(error){
      res.status(400).send(error);
    });
  }






};
