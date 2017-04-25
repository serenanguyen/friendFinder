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
    // create array for the sum of the differences between user and each predefined house
    var allDifferences = [];
    // placeholder for smallest number
    var smallNum = 0;
    // placeholder for index of smallest number
    var smallIndex = 0;
    // user's score is always last
    // for each predefined friend run
    for(i=0; i<(friends.length-1); i++){
      // placeholder for sum of all differences
      var differences = 0;
      // for each score in each house
      for(j=0; j<friends[i].scores.length; j++){
        // find the difference between user score and house score for corresponding question and add to current value of differences
        differences += (Math.abs(parseInt(myScore[j]) - friends[i].scores[j]));
      }
      // push total differences to array allDifferences
      allDifferences.push(differences);
      // finding smallest difference
      // if differences value is less than smallest number or it is the first value in array
      if(differences < smallNum || i === 0){
        // set smallNum to differences
        smallNum = differences;
        // set smallIndex to current index
        smallIndex = i;
      }
    };
    // return friend of calculated smallest index 
  res.json(friends[smallIndex]);
  })
}
