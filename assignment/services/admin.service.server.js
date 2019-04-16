var userModel = require('./model/user/user.model.server');


module.exports = function(app) {

  app.post("/api/user/users", findAllUsers);
  app.delete("/api/user/:userId", deleteUser);


  function findByUsername(req, res) {
    const username = req.query["username"];
    userModel.findUserByUserName(username).then(function(user){
      res.send(user);
    }, function(error){
      res.status(400).send(error);
    });
  }






};
