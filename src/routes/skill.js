module.exports = function (express) {
  var router = express.Router();
  var skill = require('../models/skill.js');

  router.get('/skill/:id',function(req,res){
    skill.find({id:req.params.id},function(err){
      res.status(500).json(err);
    }, function(foundSkill) {
      res.status(200).json(foundSkill);
    });
  });

  router.get('/skills',function(req,res){
    skill.findAll(function(err){
      res.status(500).json(err);
    }, function(foundSkill) {
      res.status(200).json(foundSkill);
    });
  });

  return router;
};
