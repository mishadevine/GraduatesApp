module.exports = function (express) {
  var router = express.Router();
  var project = require('../models/project.js');

  router.get('/project/:id',function(req,res){
    project.find({id:req.params.id},function(err){
      res.status(500).json(err);
    }, function(foundProject) {
      res.status(200).json(foundProject);
    });
  });

  router.get('/projects',function(req,res){
    project.findAll(function(err){
      res.status(500).json(err);
    }, function(foundProject) {
      res.status(200).json(foundProject);
    });
  });

  return router;
};
