var path = require("path");

module.exports = function(app) {
  // give it a path to route and a callback function that will run every time there is a get request on the root path
  app.get("/",function(req, res){
    //send back server response
    // content-type header for response is now set to application/json
  	res.sendFile(path.join(__dirname, "/../public/home.html"))
  });
  app.get("/survey",function(req, res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"))
  });
}
