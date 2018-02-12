var express = require("express");
var config  = require('./../config')
var port = config.port;
var server_url = config.server_url
var app = express();


app.get("/login", function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');;
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    res.setHeader('Access-Control-Allow-Credentials', true);


  var test = (req.query.username==config.SUCCEED_TEST_USERNAME&&req.query.password==config.SUCCEED_TEST_PASSWORD)

  console.log(req.query);
  res.send(test);
});

app.listen(port);
console.log("Server is Up on "+server_url)