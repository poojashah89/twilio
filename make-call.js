var accountSid = 'ACecdfe73423ced8369e1868be52e7972d';
var authToken = '04c0df012f0b2eed76af5dcd1ec8c585';

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
 }
});
