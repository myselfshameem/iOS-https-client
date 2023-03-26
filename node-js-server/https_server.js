var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var port = 9000;

var options = {
    key: fs.readFileSync('ssl-cert/key.pem'),
    cert: fs.readFileSync('ssl-cert/certificate.pem'),
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.get('/', function (req, res) {
    res.writeHead(200);
    res.end("hello world from Https server :)");
});

app.get('/health', function (req, res) {
    res.writeHead(200);
    res.end("Connected to server using SSL :)");
});