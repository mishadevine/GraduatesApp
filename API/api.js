module.exports = function(express) {
  var router = express.Router();

  router.get('/studentInfo', function(req, res) {
    res.json([
      {name: "Misha Devine",
      projects: [
        {url: "www.teamtahjmowryofficial.is-great.org"},
        {url: "www.facebook.com"},
        {url: "www.chrisgolightlyofficial.com"}
      ],
      skills: [
        {level: "Javascript" },
        {level: "PHP"},
        {level: "Nodejs"},
        {level: "Angular"},
        {level: "SASS"}
      ]},
      {name: "Kelly Price",
      projects: [
        {url: "www.teamtahjmowryofficial.is-great.org"},
        {url: "www.facebook.com"},
        {url: "www.chrisgolightlyofficial.com"},
        {url: "www.panyhamagazine.com"},
        {url: "www.panyhafoundation.com"}
      ],
      skills: [
        {level: "Javascript" },
        {level: "PHP"},
        {level: "Nodejs"},
        {level: "Angular"},
        {level: "SASS"}
      ]},
      {name: "Jasmine Franklin",
      projects: [
        {url: "www.teamtahjmowryofficial.is-great.org"},
        {url: "www.facebook.com"},
        {url: "www.chrisgolightlyofficial.com"},
        {url: "www.panyhamagazine.com"},
        {url: "www.panyhafoundation.com"}
      ],
      skills: [
        {level: "Javascript" },
        {level: "PHP"},
        {level: "Nodejs"},
        {level: "Angular"},
        {level: "SASS"}
      ]},
      {name: "Julie Frisco",
      projects: [
        {url: "www.teamtahjmowryofficial.is-great.org"},
        {url: "www.facebook.com"},
        {url: "www.chrisgolightlyofficial.com"},
        {url: "www.panyhamagazine.com"},
        {url: "www.panyhafoundation.com"}
      ],
      skills: [
        {level: "Javascript" },
        {level: "PHP"},
        {level: "Nodejs"},
        {level: "Angular"},
        {level: "SASS"}
      ]},
      {name: "Kirsten Couch",
      projects: [
        {url: "www.teamtahjmowryofficial.is-great.org"},
        {url: "www.facebook.com"},
        {url: "www.chrisgolightlyofficial.com"},
        {url: "www.panyhamagazine.com"},
        {url: "www.panyhafoundation.com"}
      ],
      skills: [
        {level: "Javascript" },
        {level: "PHP"},
        {level: "Nodejs"},
        {level: "Angular"},
        {level: "SASS"}
      ]}
    ])
  });
  return router;
}
