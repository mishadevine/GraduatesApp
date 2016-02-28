module.exports = function (express) {
  var router = express.Router();
  var student = require('../models/student.js');

  router.get('/student/:id',function(req,res){
    student.find({id:req.params.id},function(err){
      res.status(500).json(err);
    }, function(foundStudent) {
      res.status(200).json(foundStudent);
    });
  });

  router.get('/students',function(req,res){
    student.findAll(function(err){
      res.status(500).json(err);
    }, function(foundStudent) {
      res.status(200).json(foundStudent);
    });
  });

  return router;
};
