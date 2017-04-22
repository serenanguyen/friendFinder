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
var friends = [
  {
    name: "Pinto",
    image: "",
    scores: [1,2,3,4,5,1,2,3,4,5]
  },
  {
    name: "Bill Nye",
    image: "http://www.cincinnatimagazine.com/wp-content/uploads/sites/20/2015/11/Bill-Nye-3-200x300.jpeg",
    scores: [1,1,1,1,1,1,1,1,1,1]
  },
  {
    name: "Mushu",
    image: "",
    scores: [2,2,2,2,2,2,2,2,2,2]
  }
];

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
  myScore = newFriend.scores;
  var allDifferences = []
  var smallNum = 0;
  var smallIndex = 0;
  for(i=0; i<(friends.length-1); i++){
    var differences = 0;
    for(j=0; j<friends[i].scores.length; j++){
      differences += (Math.abs(parseInt(myScore[j]) - friends[i].scores[j]));
    }
    allDifferences.push(differences);
    if(differences < smallNum || i === 0){
      smallNum = differences;
      smallIndex = i;
    }
  };
console.log(friends[smallIndex]);
res.json(friends[smallIndex]);
})

//stars server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
