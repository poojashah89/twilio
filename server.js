var http = require('http');
var express = require('express');
var twilio = require('twilio');

var app = express();

app.post('/voice', function(req, res) {
 var twiml = new twilio.TwimlResponse();
 twiml.say('Hello from Pooja at Twilio! Have fun.');
 res.writeHead(200, {'Content-Type': 'text/xml'});
 res.end(twiml.toString())
});

http.createServer(app).listen(1337, function() {
 console.log('Express Server is live 1337');
})
