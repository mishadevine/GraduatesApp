var express = require('express');
var body_parser = require('body-parser');
var app = express();

// config
var port = process.env.PORT || 3000;
// app.use('/api', require('../API/api.js')(express));
app.use('/api', require('./routes/student.js')(express));
app.use('/api', require('./routes/skill.js')(express));
app.use('/api', require('./routes/project.js')(express));
app.use('/API', require('../API/api.js')(express));
app.use('/assets', express.static('assets'));
// app.use('/API', express.static('API'));
// app.use('/', express.static('src'));
app.get('*', function (req,res) {
  res.sendFile(__dirname + '/index.html');
})

var server = app.listen(port, function() {
  console.log('Server Active on', port);
});

module.exports = server;
