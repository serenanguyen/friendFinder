var express = require("express");
var bodyParser = require("body-parser");

// Express
var app = express();
var PORT = 3000;

// configure app to use bodyParser which will allow us to get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//stars server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
