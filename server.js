/*global __dirname, require*/
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

// Evil global variable that doesn't save state. Nice.
var status = 'down';

var app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/report', function (req, res) {
    status = req.body.status;
    res.send("OKAY");
});

app.get('/status', function (req, res) {
    res.json({status: status});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
