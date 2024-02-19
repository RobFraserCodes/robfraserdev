const postmark = require('postmark');

var client = new postmark.ServerClient("8127b402-d9d8-410d-93d4-a2253d963a56");

client.sendEmail({
  "From": "hi@robfraser.dev",
  "To": "hi@robfraser.dev",
  "Subject": "Hello from Postmark",
  "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
  "TextBody": "Hello from Postmark!",
  "MessageStream": "outbound"
});