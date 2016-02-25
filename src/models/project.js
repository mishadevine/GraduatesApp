module.exports = function() {
  var database = require('database.js');
  var sequelize = db.connection;

  function _create(data,err,success) {
    db.projects.create(data).then(success).catch(err);
  }

  function _update(data,err,success) {
    db.projects.find({where:{id:1}}).then(function(matchedProject) {
      matchedProject.updateAttributes(data).then(success).catch(err);
    }).catch(err);
  }

  function _find(data,err,success) {
    db.projects.find({where:{id:1}}).then(success).catch(err);
  }

  function _findAll(err,success) {
    db.projects.findAll().then(success).catch(err);
  }

  function _delete(data,err,success) {
    db.projects.destroy({where:{id:1}}).then(success).catch(err);
  }

  return {
    create: _create,
    update: _update,
    find: _find,
    findAll: _findAll,
    delete: _delete
  }

}();
