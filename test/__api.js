var request = require('supertest');

describe('API', function() {
  var server;
  var studentTest = {name: "Misha Devine"};


  beforeEach(function() {
    server = require('../src/server.js');
  });

  afterEach(function () {
    server.close();
  });

  it('/api/students should return students objects.', function testHealth(done) {
    request(server)
    .get('/api/students')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(function(res) {
      console.log(res.body[0].name);
      if(res.body[0].name !== studentTest.name) throw new Error('Name does not match.');
    })
    .expect(200,done);
    });
});
