var userModel = require('./model/user/user.model.server');


module.exports = function(app) {

  app.get("/api/users", findAllUsers);
  app.delete("/api/users/:userId", deleteUser);



  function findAllUsers(req, res) {
    userModel.findAllUsers().then(function(users){
      res.send(users);
    }, function(error){
      res.status(400).send(error);
    });
  }

  function deleteUser(req, res) {
    console.log('in deleteUser in admin.service.server');
    console.log(req.params);
    const userId = req.params['userId'];
    console.log(userId);
    userModel.deleteUser(userId).then(
      function(user) {
        res.send(user);
      }, function (error) {
        res.status(400).send("user not found");
      }
    );
  }






};
