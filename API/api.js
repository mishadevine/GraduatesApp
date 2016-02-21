module.exports = function(express) {
  var router = express.Router();

  router.get('/students', function(req, res) {
    res.json([
      {name: "Misha Devine"},
      {name: "Kelly Price"},
      {name: "Jasmine Franklin"},
      {name: "Julie Frisco"},
      {name: "Kirsten Couch"}
    ])
  });

  router.get('/projects', function(req, res) {
    res.json([
      {name: "www.teamtahjmowryofficial.is-great.org"},
      {name: "www.panyhamagazine.com"},
      {name: "www.panyhafoundation.org"},
      {name: "www.sandhillins.com"},
      {name: "www.theuselessweb.com"}
    ])
  });

  router.get('/skills', function(req, res) {
    res.json([
      {name: "Javascript"},
      {name: "PHP"},
      {name: "Angular"},
      {name: "Node"},
      {name: "SASS"}
    ])
  });
  return router;
}
