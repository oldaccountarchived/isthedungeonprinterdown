/*global __dirname, require*/
var exec = require('child_process').exec,
    express = require('express'),
    path = require('path'),
    q = require('q');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/report', function (req, res) {
    
});

app.get('/status', function (req, res) {
    res.json({status: 'up'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
