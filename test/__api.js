var request = require('supertest');

describe('API', function() {
  var server;
  var studentTest = {name: "Misha Devine"};


  beforeEach(function() {
    server = require('../src/server.js');
  });

  afterEach(function () {
    server.close();
    // studentName.close();
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

    //   .expect(200,[
    //     {name: "Misha Devine",
    //     projects: [
    //       {url: "www.teamtahjmowryofficial.is-great.org"},
    //       {url: "www.facebook.com"},
    //       {url: "www.chrisgolightlyofficial.com"}
    //     ],
    //     skills: [
    //       {level: "Javascript" },
    //       {level: "PHP"},
    //       {level: "Nodejs"},
    //       {level: "Angular"},
    //       {level: "SASS"}
    //     ]},
    //     {name: "Kelly Price",
    //     projects: [
    //       {url: "www.teamtahjmowryofficial.is-great.org"},
    //       {url: "www.facebook.com"},
    //       {url: "www.chrisgolightlyofficial.com"},
    //       {url: "www.panyhamagazine.com"},
    //       {url: "www.panyhafoundation.com"}
    //     ],
    //     skills: [
    //       {level: "Javascript" },
    //       {level: "PHP"},
    //       {level: "Nodejs"},
    //       {level: "Angular"},
    //       {level: "SASS"}
    //     ]},
    //     {name: "Jasmine Franklin",
    //     projects: [
    //       {url: "www.teamtahjmowryofficial.is-great.org"},
    //       {url: "www.facebook.com"},
    //       {url: "www.chrisgolightlyofficial.com"},
    //       {url: "www.panyhamagazine.com"},
    //       {url: "www.panyhafoundation.com"}
    //     ],
    //     skills: [
    //       {level: "Javascript" },
    //       {level: "PHP"},
    //       {level: "Nodejs"},
    //       {level: "Angular"},
    //       {level: "SASS"}
    //     ]},
    //     {name: "Julie Frisco",
    //     projects: [
    //       {url: "www.teamtahjmowryofficial.is-great.org"},
    //       {url: "www.facebook.com"},
    //       {url: "www.chrisgolightlyofficial.com"},
    //       {url: "www.panyhamagazine.com"},
    //       {url: "www.panyhafoundation.com"}
    //     ],
    //     skills: [
    //       {level: "Javascript" },
    //       {level: "PHP"},
    //       {level: "Nodejs"},
    //       {level: "Angular"},
    //       {level: "SASS"}
    //     ]},
    //     {name: "Kirsten Couch",
    //     projects: [
    //       {url: "www.teamtahjmowryofficial.is-great.org"},
    //       {url: "www.facebook.com"},
    //       {url: "www.chrisgolightlyofficial.com"},
    //       {url: "www.panyhamagazine.com"},
    //       {url: "www.panyhafoundation.com"}
    //     ],
    //     skills: [
    //       {level: "Javascript" },
    //       {level: "PHP"},
    //       {level: "Nodejs"},
    //       {level: "Angular"},
    //       {level: "SASS"}
    //     ]}
    //   ], done);
    });

});
