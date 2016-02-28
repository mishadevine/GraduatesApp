module.exports = function() {
  var db = require("./database.js");
  var sequelize = db.connection;

  function _create(data,err,success) {
    db.student.create(data).then(success).catch(err);
  }

  function _update(data,err,success) {
    db.student.find({where:{id:data.id}}).then(function(matchedStudent) {
      matchedStudent.updateAttributes(data).then(success).catch(err);
    }).catch(err);
  }

  function _find(data,err,success) {
    db.student.find({where:{id:data.id}}).then(success).catch(err);
  }

  function _findAll(err,success) {
    db.student.findAll().then(success).catch(err);
  }

  function _delete(data,err,success) {
    db.student.destroy({where:{id:data.id}}).then(success).catch(err);
  }

  return {
    create: _create,
    update: _update,
    find: _find,
    findAll: _findAll,
    delete: _delete
  }

}();
