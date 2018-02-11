var express = require("express");
var config  = require('./../config')
var port = config.port;
var server_url = config.server_url
var app = express();


app.get("/login", function(req, res) {
  var test = (req.query.username==config.TEST_USERNAME&&req.query.password==config.TEST_PASSWORD)
  res.send(test);
});

app.listen(port);
console.log("Server is Up on "+server_url)