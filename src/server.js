var express = require('express');
var body_parser = require('body-parser');
var app = express();

// config
var port = 3000;

app.use('/api', require('../API/api.js')(express));

var server = app.listen(port, function() {
  console.log('Server Active on', port);
});

module.exports = server;
