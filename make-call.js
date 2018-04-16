var accountSid = 'xxx';
var authToken = 'xxx';

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
 }
});
