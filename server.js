var http = require('http');
var express = require('express');
var twilio = require('twilio');
var accountSid = 'xxx';
var authToken = 'xxx';

var app = express();

app.post('/voice', function(req, res) {
 //var twiml = new twilio.TwimlResponse();
 var twiml = new twilio.twiml.VoiceResponse();

 var client = require('twilio')(accountSid, authToken);
 client.calls.create({
  url: 'http://demo.twilio.com/docs/voice.xml',
  to: '+1xxx',
  from: '+1xxx'
 }, function(err, call) {
 if(err) {
  console.log(err);
 } else {
  console.log(call.sid);
   twiml.say('Hello from Pooja at Twilio! Have fun.');
 res.header('Content-Type', 'text/xml');
 res.end(twiml.toString())

 }
});


});

http.createServer(app).listen(1337, function() {
 console.log('Express Server is live 1337');
})
