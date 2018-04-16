var http = require('http');
var express = require('express');
var twilio = require('twilio');
var accountSid = 'ACecdfe73423ced8369e1868be52e7972d';
var authToken = '04c0df012f0b2eed76af5dcd1ec8c585';

var app = express();

app.post('/voice', function(req, res) {
 //var twiml = new twilio.TwimlResponse();
 var twiml = new twilio.twiml.VoiceResponse();

 var client = require('twilio')(accountSid, authToken);
 client.calls.create({
  url: 'http://demo.twilio.com/docs/voice.xml',
  to: '+14086744109',
  from: '+18582951328'
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
