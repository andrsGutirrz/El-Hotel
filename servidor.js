var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
  fs.readFile("./index.html",function(err,html){
    res.write(html);
    res.end();
  });

}).listen(8080);

/*
var http = require("http");
var fs = require("fs");

var html = fs.readFileSync("./index.html");

http.createServer(function(req,res){
  res.write(html);
  res.end();
}).listen(8080);*/
