const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);

client.sendEmail({
    "From": "hi@robfraser.dev",
    "To": "hi@robfraser.dev",
    "Subject": "Hello from Postmark",
    "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
    "TextBody": "Hello from Postmark!",
    "MessageStream": "outbound"
  });