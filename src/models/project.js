module.exports = function() {
  var db = require('./database.js');
  var sequelize = db.connection;

  function _create(data,err,success) {
    db.project.create(data).then(success).catch(err);
  }

  function _update(data,err,success) {
    db.project.find({where:{id:data.id}}).then(function(matchedProject) {
      matchedProject.updateAttributes(data).then(success).catch(err);
    }).catch(err);
  }

  function _find(data,err,success) {
    db.project.find({where:{id:data.id}}).then(success).catch(err);
  }

  function _findAll(err,success) {
    db.project.findAll().then(success).catch(err);
  }

  function _delete(data,err,success) {
    db.project.destroy({where:{id:data.id}}).then(success).catch(err);
  }

  return {
    create: _create,
    update: _update,
    find: _find,
    findAll: _findAll,
    delete: _delete
  }

}();
