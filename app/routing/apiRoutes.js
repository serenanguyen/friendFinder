var friends = require("../data/friends");

module.exports = function(app){
  app.get("/api/friends",function(req, res){
  	return res.json(friends);
  });
  // create
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
}
