module.exports = function(app) {

  require("./services/user.service.server")(app);
  // require("./services/admin.service.server")(app);
  // require("./services/homepage.service.server")(app);

}
