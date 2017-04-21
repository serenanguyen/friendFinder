var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express
var app = express();
var PORT = 3000;

// data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// data
var friends = [];

app.get("/",function(req, res){
	res.sendFile(path.join(__dirname, "app/public/home.html"))
});
app.get("/survey",function(req, res){
  res.sendFile(path.join(__dirname, "app/public/survey.html"))
});
app.get("/api/friends",function(req, res){
	return res.json(friends);
});
app.post("/api/friends",function(req, res){
  var newFriend = req.body;
  friends.push(newFriend);
})

//stars server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
