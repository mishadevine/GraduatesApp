module.exports = function() {
  var database = require("database.js");
  var sequelize = db.connection;

  function _create(data,err,success) {
    db.students.create(data).then(success).catch(err);
  }

  function _update(data,err,success) {
    db.students.find({where:{id:1}}).then(function(matchedStudent) {
      matchedStudent.updateAttributes(data).then(success).catch(err);
    }).catch(err);
  }

  function _find(data,err,success) {
    db.students.find({where:{id:1}}).then(success).catch(err);
  }

  function _findAll(err,success) {
    db.students.findAll().then(success).catch(err);
  }

  function _delete(data,err,success) {
    db.students.destroy({where:{id:1}}).then(success).catch(err);
  }

  return {
    create: _create,
    update: _update,
    find: _find,
    findAll: _findAll,
    delete: _delete
  }

}();
