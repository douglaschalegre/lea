var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var xhub = require('express-x-hub');
var helmet = require('helmet')

const PORT = process.env.PORT || 5000
app.set('port', PORT);
app.listen(app.get('port'));

app.use(xhub({ algorithm: 'sha1', secret: process.env.APP_SECRET }));
app.use(bodyParser.json());
app.use(helmet())

const token = process.env.TOKEN || 'token';
var received_updates = [];

app.get('/', function(req, res) {
  res.send('<pre>' + JSON.stringify(received_updates, null, 2) + '</pre>');
});

app.get(['/facebook', '/instagram', '/threads'], function(req, res) {
  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == token
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});

app.post('/facebook', function(req, res) {
  console.log('Facebook request body:', req.body);

  if (!req.isXHubValid()) {
    console.log('Warning - request header X-Hub-Signature not present or invalid');
    res.sendStatus(401);
    return;
  }

  // Process the Facebook updates here
  received_updates.unshift(req.body);
  res.sendStatus(200);
});

app.post('/instagram', function(req, res) {
  // Process the Instagram updates here
  received_updates.unshift(req.body);
  res.sendStatus(200);
});

app.post('/threads', function(req, res) {
  // Process the Threads updates here
  received_updates.unshift(req.body);
  res.sendStatus(200);
});

app.listen(() => console.log(`server running on port ${PORT}...
  TOKEN: ${token}
  SECRET: ${process.env.APP_SECRET}
`));