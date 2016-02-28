var request = require('supertest');

describe('API', function() {
  var server;

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
      // console.log(res.body[0].name);
      // console.log(res.body.project);
      if(res.body[0].name !== "Misha Devine") throw new Error('Name does not match.');
    })
    .expect(200,done);
    });

    it('/api/projects should return projects objects.', function testHealth(done) {
      request(server)
      .get('/api/projects')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        if(res.body[0].url !== "www.teamtahjmowryofficial.is-great.org") throw new Error('URL does not match.');
      })
      .expect(200,done);
      });

      it('/api/skills should return skills objects.', function testHealth(done) {
        request(server)
        .get('/api/skills')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(function(res) {
          if(res.body[0].level !== "Angular") throw new Error('Skill does not match.');
        })
        .expect(200,done);
        });

});
